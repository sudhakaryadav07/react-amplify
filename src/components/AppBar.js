import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

class AppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            navbarColor: null,
            buyButtonColor: null
        }
    }

    UNSAFE_componentWillMount() {
        this.initState()
    }

    initState = async () => {

    }

    render() {
        let { collapseOpen } = this.state;
        return (
            <>
                {collapseOpen ? (
                    <div
                        id="bodyClick"
                        onClick={() => {
                            document.documentElement.classList.toggle("nav-open");
                            this.setState({ collapseOpen: !this.state.collapseOpen });
                        }}
                    />
                ) : null}
                <Navbar className={"fixed-top"} color="white" expand="lg">
                    <Container>
                        <div className="navbar-translate">
                            <NavbarBrand to="/" tag={Link} id="navbar-brand">
                                WE INSPIRE
                        </NavbarBrand>
                        </div>

                        <Collapse isOpen={collapseOpen} navbar>
                            <Nav className="ml-auto" id="ceva" navbar>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        href="#pablo"
                                        id="navbarDropdownMenuLink1"
                                        nav
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="now-ui-icons design_app"></i>
                                        <p>Components</p>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                                        <DropdownItem >
                                            <i className="now-ui-icons design_image"></i>
                    Presentation
                  </DropdownItem>
                                        <DropdownItem >
                                            <i className="now-ui-icons business_chart-pie-36"></i>
                    All components
                  </DropdownItem>
                                        <DropdownItem
                                            target="_blank"
                                        >
                                            <i className="now-ui-icons design_bullet-list-67"></i>
                    Documentation
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        href="#pablo"
                                        id="navbarDropdownMenuLink"
                                        nav
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i
                                            aria-hidden={true}
                                            className="now-ui-icons files_paper"
                                        ></i>
                                        <p>Sections</p>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                                        <DropdownItem >
                                            <i className="now-ui-icons shopping_box"></i>
                    Headers
                  </DropdownItem>
                                        <DropdownItem >
                                            <i className="now-ui-icons ui-2_settings-90"></i>
                    Features
                  </DropdownItem>
                                        <DropdownItem >
                                            <i className="now-ui-icons text_align-left"></i>
                    Blogs
                  </DropdownItem>
                                        <DropdownItem >
                                            <i className="now-ui-icons ui-2_chat-round"></i>
                    Testimonials
                  </DropdownItem>
                                        <DropdownItem >
                                            <i className="now-ui-icons tech_mobile"></i>
                    Contact Us
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        href="#pablo"
                                        id="navbarDropdownMenuLink"
                                        nav
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i
                                            aria-hidden={true}
                                            className="now-ui-icons design_image"
                                        ></i>
                                        <p>Examples</p>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                                        <DropdownItem >
                                            <i className="now-ui-icons business_bulb-63"></i>
                    About-us
                  </DropdownItem>
                                        <DropdownItem >
                                            <i className="now-ui-icons text_align-left"></i>
                    Blog Post
                  </DropdownItem>
                                        <DropdownItem>
                                            <i className="now-ui-icons design_bullet-list-67"></i>
                    Blog Posts
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Button
                                        size="small"
                                        className="nav-link btn-default"
                                        color={'info'}
                                        target="_blank"
                                    >
                                        <p>Buy Now</p>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar >
            </>
        );
    }
}

export default AppBar;
