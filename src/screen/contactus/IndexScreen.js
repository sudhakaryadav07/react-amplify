import React, { Component } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import { AppBar, Footer } from '../../components/index';

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first1Focus: false,
            last1Focus: false,
            email1Focus: false
        }
    }

    handleChange = (event) => {
        try {
            const _state = this.state.gmodel;
            _state[event.target.name] = event.target.value;
            this.setState({ state: _state });
        } catch (e) {
        }
    }

    render() {
        let { first1Focus, last1Focus, email1Focus } = this.state;
        return (
            <>
                <AppBar />
                <div className="cd-section" id="contact-us">
                    <div
                        className="contactus-1 section-image"
                        style={{
                            backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")",
                        }}
                    >
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className="title">Get in Touch</h2>
                                    <h4 className="description">
                                        You need more information? Check what other persons are saying
                                        about our product. They are very happy with their purchase.
                </h4>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons location_pin"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Find us at the office</h4>
                                            <p className="description">
                                                Bld Mihail Kogalniceanu, nr. 8, <br></br>
                      7652 Bucharest, <br></br>
                      Romania
                    </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons tech_mobile"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Give us a ring</h4>
                                            <p className="description">
                                                Michael Jordan <br></br>
                      +40 762 321 762 <br></br>
                      Mon - Fri, 8:00-22:00
                    </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="ml-auto mr-auto" md="5">
                                    <Card className="card-contact card-raised">
                                        <Form id="contact-form1" method="post" role="form">
                                            <CardHeader className="text-center">
                                                <CardTitle tag="h4">Contact Us</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col className="pr-2" md="6">
                                                        <label>First name</label>
                                                        <InputGroup
                                                            className={first1Focus ? "input-group-focus" : ""}
                                                        >
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="now-ui-icons users_circle-08"></i>
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                aria-label="First Name..."
                                                                autoComplete="given-name"
                                                                placeholder="First Name..."
                                                                type="text"
                                                                onFocus={() => this.setState({ first1Focus: true })}
                                                                onBlur={() => this.setState({ first1Focus: false })}
                                                            ></Input>
                                                        </InputGroup>
                                                    </Col>
                                                    <Col className="pl-2" md="6">
                                                        <FormGroup>
                                                            <label>Last name</label>
                                                            <InputGroup
                                                                className={last1Focus ? "input-group-focus" : ""}
                                                            >
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="now-ui-icons text_caps-small"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Last Name..."
                                                                    autoComplete="family-name"
                                                                    placeholder="Last Name..."
                                                                    type="text"
                                                                    onFocus={() => this.setState({ last1Focus: true })}
                                                                    onBlur={() => this.setState({ last1Focus: false })}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <label>Email address</label>
                                                    <InputGroup
                                                        className={email1Focus ? "input-group-focus" : ""}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="now-ui-icons ui-1_email-85"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            autoComplete="email"
                                                            placeholder="Email Here..."
                                                            type="email"
                                                            onFocus={() =>this.setState({ email1Focus: true })}
                                                            onBlur={() =>this.setState({ email1Focus: false })}
                                                        ></Input>
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <label>Your message</label>
                                                    <Input
                                                        id="message"
                                                        name="message"
                                                        rows="6"
                                                        type="textarea"
                                                    ></Input>
                                                </FormGroup>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="checkbox"></Input>
                                                                <span className="form-check-sign"></span>
                              I'm not a robot
                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <Button
                                                            className="btn-round pull-right"
                                                            color="info"
                                                            type="submit"
                                                        >
                                                            Send Message
                          </Button>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Form>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer history={this.props.history}/>
            </>
        );
    }
}

export default ContactUs;
