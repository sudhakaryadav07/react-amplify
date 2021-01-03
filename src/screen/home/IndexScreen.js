import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { MESSAGES } from '../../data/data';
import TagsInput from "react-tagsinput";
import { Header, Footer, AppBar } from '../../components/index';
import { Container, Row, Col, Button, Label, Input, FormGroup, Spinner } from 'reactstrap';
import { UserCard } from './components/cards/index';
import { getRoleModelsByName, getRoleModelsByCategories } from '../../graphql/queries'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      mode: "tag",
      search: "",
      interest: "",
      gKeyLoader: false,
      tags: ["births"],
      message: "Vow to stop worrying and start loving."
    }
  }

  refreshComponent = async (key) => this.setState({ [key]: key + Math.random() });
  resetComponent = async (key) => this.setState({ [key]: null });

  UNSAFE_componentWillMount() {
    this.initState();
  }

  initState = async () => {
    try {
      await this.handleRoleModelByCategory();
      setInterval(() => {
        this.setState({ message: MESSAGES[parseInt(Math.floor(Math.random() * 10))] })
      }, 5000);
    } catch (e) {

    }
  }

  setTagsValue = async (value) => this.setState({ tags: value });

  handleRoleModelByName = async (e) => {
    try {
      await this.refreshComponent('gKeyLoader');
      let { name } = this.state;
      let filteredUser = [];
      const { data } = await API.graphql(graphqlOperation(getRoleModelsByName, { name: name }))
      filteredUser = data.getRoleModelsByName;
      this.setState({ users: filteredUser });
      await this.resetComponent('gKeyLoader');
    } catch (e) {

    }
  }

  handleRoleModelByCategory = async () => {
    try {
      await this.refreshComponent('gKeyLoader');
      let { tags } = this.state;
      const { data } = await API.graphql(graphqlOperation(getRoleModelsByCategories, { categories: tags }));
      let filteredUser = data.getRoleModelsByCategories;
      this.setState({ users: filteredUser });
      await this.resetComponent('gKeyLoader');
    } catch (e) {

    }
  }

  renderUser() {
    let { users } = this.state;
    if (users && users.length > 0) {
      return users.map((data, i) => {
        return (
          <UserCard
            key={i}
            history={this.props.history}
            data={data}
          />
        );
      })
    }
  }

  renderChooseRadio() {
      return (
        <Container style={{ paddingBottom: 10 }}>
          <Row>
            <Col md="10" >
              <Row>
                <Col md="3" >
                  <FormGroup check style={{ margin: 0 }}>
                    <Label check style={{ color: 'white' }}>
                      <Input type="radio" name="radio1" value="tag" onChange={(e) => this.setState({ mode: e.target.value })} />
                        Get You Role Model
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="3" >
                  <FormGroup check style={{ margin: 0 }}>
                    <Label check style={{ color: 'white' }}>
                      <Input type="radio" name="radio1" value="search" onChange={(e) => this.setState({ mode: e.target.value })} />
                        Search By Name
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    } 

  render() {
    let { mode, message, tags, gKeyLoader } = this.state;
    return (
      <>
        <AppBar />
        <Header message={message} />
        <div className="wrapper">
          <div className="team-3 section-image" style={{ backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")" }}>
            {this.renderChooseRadio()}
            <Container>
              {mode === "search" ?
                <Row>
                  <Col md="10" >
                    <FormGroup>
                      <Input className="homeinput" type="text" name="search" placeholder="Search" onChange={(e) => this.setState({ name: e.target.value })} />
                    </FormGroup>
                  </Col>
                  <Col md="2" >
                    <Button title='Go' size="sm" style={{ marginTop: 6, fontSize: 12 }} onClick={this.handleRoleModelByName}>Get My Role Model</Button>
                  </Col>
                </Row> :
                <Row>
                  <Col md="10" >
                    <TagsInput
                      style={{ backgroundColor: '#2CA8FF' }}
                      tagProps={{
                        className: "react-tagsinput-tag badge",
                      }}
                      onChange={(value) => this.setTagsValue(value)}
                      value={tags}
                      onlyUnique
                    ></TagsInput>
                  </Col>
                  <Col md="2" >
                    <Button title='Go' size="sm" style={{ marginTop: 6, fontSize: 12 }} onClick={this.handleRoleModelByCategory}>Get My Role Model</Button>
                  </Col>
                </Row>}
            </Container>
            <Container>
              {!gKeyLoader ?
                <Row style={{ height: 510, overflow: 'auto' }}>
                  {this.renderUser()}
                </Row>
                :
                <Row style={{ height: 510, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                  <Spinner style={{color:'ghostwhite', width: '3rem', height: '3rem' }} />
                </Row>}
            </Container>
          </div>
          <Footer history={this.props.history} />
        </div>
      </>
    );
  }
}

export default Home;