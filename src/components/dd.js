import React, { Component } from "react";
import {
    Row,Col,
    NavLink,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container
} from "reactstrap";

class AppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    UNSAFE_componentWillMount() {
        this.initState()
    }

    initState = async () => {

    }

    render() {
        return (
            <>
                <div className="navbar-translate">
                    <Navbar className="bg-white fixed-top navbar navbar-expand-lg" expand="lg" >
                        <Container>
                            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                                GET MY ROLE MODEL
                            </NavbarBrand>
                            <Row>
                                <Col md='12'>
                                <Nav className="mx-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            href="https://twitter.com/CreativeTim?ref=creativetim"
                                            target="_blank"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="https://www.facebook.com/CreativeTim?ref=creativetim"
                                            target="_blank"
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </NavLink>
                                    </NavItem>
                                </Nav> 
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    }
}

export default AppBar;
