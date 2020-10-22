import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Button, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import { AppBar, Footer } from '../../components/index';

const MapWrapper = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
            defaultOptions={{
                scrollwheel: false,
                styles: [
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
                    },
                    {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#ffffff" }, { lightness: 17 }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{ color: "#ffffff" }, { lightness: 18 }],
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{ color: "#ffffff" }, { lightness: 16 }],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{ color: "#dedede" }, { lightness: 21 }],
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [
                            { visibility: "on" },
                            { color: "#ffffff" },
                            { lightness: 16 },
                        ],
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [
                            { saturation: 36 },
                            { color: "#333333" },
                            { lightness: 40 },
                        ],
                    },
                    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#fefefe" }, { lightness: 20 }],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
                    },
                ],
            }}
        >
            <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        </GoogleMap>
    ))
);

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameFocus: false,
            emailFocus: false,
            numberFocus: false
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
        let { nameFocus, emailFocus, numberFocus } = this.state;
        return (
            <>
                <AppBar />
                <div className="wrapper">
                    <div className="page-header page-header-small">
                        <div
                            className="page-header-image"
                            style={{
                                backgroundImage: "url(" + require("assets/img/bg45.jpg") + ")",
                            }}
                        ></div>
                    </div>
                    <div className="main">
                        <div className="contact-content">
                            <Container>
                                <Row>
                                    <Col className="ml-auto mr-auto" md="5">
                                        <h2 className="title">Send us a message</h2>
                                        <p className="description">
                                            You can contact us with anything related to our Products.
                    We'll get in touch with you as soon as possible. <br></br>
                                            <br></br>
                                        </p>
                                        <Form id="contact-form" method="post" role="form">
                                            <InputGroup
                                                className={nameFocus ? "input-group-focus" : ""}
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons users_circle-08"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Your Name..."
                                                    type="text"
                                                    name="nameFocus"
                                                    onFocus={() => this.setState({ nameFocus: true })}
                                                    onBlur={() => this.setState({ nameFocus: false })}
                                                ></Input>
                                            </InputGroup>
                                            <label>Email address</label>
                                            <InputGroup
                                                className={emailFocus ? "input-group-focus" : ""}
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons ui-1_email-85"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    aria-label="Email Here..."
                                                    autoComplete="email"
                                                    placeholder="Email Here..."
                                                    type="email"
                                                    onFocus={() => this.setState({ emailFocus: true })}
                                                    onBlur={() => this.setState({ emailFocus: false })}
                                                ></Input>
                                            </InputGroup>
                                            <label>Phone</label>
                                            <InputGroup
                                                className={numberFocus ? "input-group-focus" : ""}
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons tech_mobile"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    autoComplete="number"
                                                    placeholder="Number Here..."
                                                    type="text"
                                                    onFocus={() => this.setState({ numberFocus: true })}
                                                    onBlur={() => this.setState({ numberFocus: false })}
                                                ></Input>
                                            </InputGroup>
                                            <FormGroup>
                                                <label>Your message</label>
                                                <Input
                                                    id="message"
                                                    name="message"
                                                    rows="6"
                                                    type="textarea"
                                                ></Input>
                                            </FormGroup>
                                            <div className="submit text-center" style={{ padding: 0 }}>
                                                <Button
                                                    className="btn-raised btn-round"
                                                    color="info"
                                                    defaultValue="Contact Us"
                                                    type="submit"
                                                >
                                                    Contact Us
                      </Button>
                                            </div>
                                        </Form>
                                    </Col>
                                    <Col className="ml-auto mr-auto" md="5" >
                                        <div className="info info-horizontal mt-5" style={{ padding: 0 }}>
                                            <div className="icon icon-info">
                                                <i className="now-ui-icons location_pin"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Find us at the office</h4>
                                                <p>
                                                    Bld Mihail Kogalniceanu, nr. 8, <br></br>
                        7652 Bucharest, <br></br>
                        Romania
                      </p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal" style={{ padding: 0 }}>
                                            <div className="icon icon-info">
                                                <i className="now-ui-icons tech_mobile"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Give us a ring</h4>
                                                <p>
                                                    Michael Jordan <br></br>
                        +40 762 321 762 <br></br>
                        Mon - Fri, 8:00-22:00
                      </p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal" style={{ padding: 0 }}>
                                            <div className="icon icon-info">
                                                <i className="business_briefcase-24 now-ui-icons"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Legal Information</h4>
                                                <p>
                                                    Creative Tim Ltd. <br></br>
                        VAT · EN2341241 <br></br>
                        IBAN · EN8732ENGB2300099123 <br></br>
                        Bank · Great Britain Bank
                      </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="big-map" id="contactUs2Map">
                        <MapWrapper
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                    <Footer history={this.props.history} />
                </div>
            </>
        );
    }
}

export default ContactUs;
