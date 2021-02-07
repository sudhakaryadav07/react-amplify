import React, { Component } from 'react';
import TagsInput from "react-tagsinput";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { API, graphqlOperation } from 'aws-amplify';
import { MESSAGES } from '../../data/data';
import { UserCard } from './components/cards/index';
import { Header, Footer, AppBar } from '../../components/index';

import { getRoleModelsByName, getRoleModelsByCategories } from '../../graphql/queries'
import { Container, Row, Col, InputGroup, InputGroupAddon, Label, InputGroupText, Input, Spinner } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      value: 0,
      name: "",
      interest: "",
      gKeyLoader: false,
      tags: [],
      message: "Vow to stop worrying and start loving."
    }
  }

  refreshComponent = async (key) => this.setState({ [key]: key + Math.random() });
  resetComponent = async (key) => this.setState({ [key]: null });

  UNSAFE_componentWillMount() {
    this.initState();
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress, true)
    document.addEventListener('click', this.loadInitialData, true)
  }

  handleKeyPress = (e) => {
    if (this.state.value === 1 && e.target.value === "" && this.state.name === "") {
      this.initState();
    }
    else if (this.state.value === 1 && e.key === "Enter") {
      this.handleRoleModelByName();
    } else {
      this.handleRoleModelByCategory();
    }
  }

  initState = async () => {
    try {
      this.refreshComponent('gKeyLoader')
      const { data } = await API.graphql(graphqlOperation(getRoleModelsByCategories, { categories: ['births'] }));
      let filteredUser = await data.getRoleModelsByCategories;
      this.setState({ users: filteredUser });
      setInterval(() => {
        this.setState({ message: MESSAGES[parseInt(Math.floor(Math.random() * 10))] })
      }, 5000);
      this.resetComponent('gKeyLoader')
    } catch (e) {

    }
  }

  handleChange = (event, newValue) => this.setState({ value: newValue })

  setTagsValue = async (value) => {
    try {
      this.setState({ tags: value });
      await this.refreshComponent('gKeyLoader');
      const { data } = await API.graphql(graphqlOperation(getRoleModelsByCategories, { categories: value }));
      let filteredUser = await data.getRoleModelsByCategories;
      this.setState({ users: filteredUser });
      await this.resetComponent('gKeyLoader');
    } catch (e) {
    }
  }

  handleRoleModelByName = async (e) => {
    try {
      await this.refreshComponent('gKeyLoader');
      let { name } = this.state;
      let filteredUser = [];
      const { data } = await API.graphql(graphqlOperation(getRoleModelsByName, { name: name }))
      filteredUser = await data.getRoleModelsByName;
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

  render() {
    let { users, value, message, tags, gKeyLoader } = this.state;
    return (
      <>
        <AppBar />
        <Header message={message} />

        <div className="wrapper" >
          <div
            className="page-header-image"
            style={{
              position: 'absolute',
              height: '110%',
              width: '100%',
              zIndex: '-1',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundImage: "url(" + require("assets/img/bg53.jpeg") + ")",
            }}
          />

          <Row style={{ textAlign: 'center', padding: '10px 15%' }}>
            <Col md="12" style={{ padding: 0 }}>
              <Label style={{ fontSize: 30, marginBottom: 0 }}>SEARCH FOR YOUR ROLE MODEL</Label>
            </Col>
          </Row>
          <Paper style={{ background: 'transparent', boxShadow: 'none', position: 'relative', borderRadius: 0, margin: '0px 9%' }}>
            <Tabs
              style={{ position: 'relative', borderBottom: '1px solid grey', }}
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Browse by Passion" style={{ outline: 'none' }} />
              <Tab label="Browse by Name" style={{ outline: 'none' }} />
            </Tabs>
          </Paper>


          <Container>
            {value === 1 ?
              <Row style={{ padding: '10px 15%' }}>
                <Col md="12" style={{ padding: 0 }}>
                  <InputGroup style={{ marginBottom: 0 }}>
                    <InputGroupAddon addonType="prepend" style={{ height: 43 }}>
                      <InputGroupText className="grouptext"><Search style={{ marginTop: '4%' }} fontSize="large" /></InputGroupText>
                    </InputGroupAddon>
                    <Input className="homeinput" type="text" name="search" placeholder="Search" onChange={(e) => this.setState({ name: e.target.value })} />
                  </InputGroup>
                </Col>
              </Row> :
              <Row style={{ padding: '10px 15%' }} >
                <Col md="1" className="tagcontainer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0, padding: 0
                  }}
                >
                  <Search style={{ marginLeft: '5%', marginTop: '2%' }} fontSize="large" />
                </Col>
                <Col md="11" className="tagcontainer"
                  style={{
                    padding: 0, borderLeftWidth: 0,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                  }}>

                  <TagsInput
                    tagProps={{
                      className: "react-tagsinput-tag badge",
                    }}
                    onChange={(value) => this.setTagsValue(value)}
                    value={tags}
                    onlyUnique
                  ></TagsInput>
                </Col>
              </Row>}
          </Container>
          <Container style={{ maxWidth: 1244 }}>
            {!gKeyLoader ?
              users.length === 0 ?
                <Row style={{ height: 510, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                  <Label style={{ color: 'grey' }}>No Role Model Found !</Label>
                </Row>
                : <Row style={{ height: 510, overflow: 'auto' }}>
                  {this.renderUser()}
                </Row>
              :
              <Row style={{ height: 510, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                <Spinner style={{ color: 'grey', width: '3rem', height: '3rem' }} />
              </Row>}
          </Container>
        </div>
        <Footer history={this.props.history} />
      </>
    );
  }
}

export default Home;