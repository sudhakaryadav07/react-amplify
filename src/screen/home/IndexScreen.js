import React, { Component } from 'react';
import { MESSAGES, USER } from '../../data/data';
import TagsInput from "react-tagsinput";
import { Header, Footer, AppBar } from '../../components/index';
import { Container, Row, Col, Button } from 'reactstrap';
import { UserCard } from './components/cards/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      interest: "",
      tags: ["Amsterdam",
        "Washington",
        "Sydney",
        "Beijing", "Amsterdam",
        "Washington",
        "Sydney",
        "Beijing", "Amsterdam",
        "Washington",
        "Sydney",
        "Beijing", "Amsterdam",
        "Washington",
        "Sydney",
        "Beijing"],
      gKeyLoader: false,
      users: USER,
      message: "Vow to stop worrying and start loving."
    }
  }

  UNSAFE_componentWillMount() {
    this.initState();
  }

  initState = () => {
    try {
      setInterval(() => {
        this.setState({ message: MESSAGES[parseInt(Math.floor(Math.random() * 10))] })
      }, 5000);
    } catch (e) {

    }
  }

  refreshComponent = async (key) => this.setState({ [key]: null });
  resetComponent = async (key) => this.setState({ [key]: null });

  handleChange = (e) => {
    try {
      this.refreshComponent('gKeyLoader');
      let filteredUser = [];

      if (e.target.name === "search") {
        this.setState({ search: e.target.value });
        filteredUser = USER.filter(item =>
          item.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          item.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        );

      } else {
        this.setState({ interest: e.target.value });
        filteredUser = USER.filter(item => {
          let interest = item.interest.filter(data =>
            data.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
          )
          if (interest.length > 0) {
            return item;
          }
          return null;
        }
        );
      }

      this.setState({ users: filteredUser });
      this.resetComponent('gKeyLoader');
    } catch (e) {

    }
  }

  setTagsValue = async (value) => {
    try {
      this.setState({ tags: value });
    } catch (e) {

    }
  }

  renderUser() {
    let { users } = this.state;
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

  render() {
    let { message, tags, gKeyLoader } = this.state;
    return (
      <>
        <AppBar />
        <Header message={message} />
        <div className="wrapper">
          <div className="team-3 section-image" style={{ backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")" }}>
            <Container>
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
                  <Button title='Go' size="sm" style={{ fontSize: 12 }}>Get My Role Model</Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ height: 510, overflow: 'auto' }} key={gKeyLoader}>
                {this.renderUser()}
              </Row>
            </Container>
          </div>
          <Footer history={this.props.history} />
        </div>
      </>
    );
  }
}

export default Home;