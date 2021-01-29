import React, { Component } from "react";
import { Button, Container, Row, Col, CardTitle, UncontrolledTooltip } from "reactstrap";
import { Footer, AppBar } from '../../components/index';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null,
            activeIndex: 0,
            animating: false
        }
    }

    UNSAFE_componentWillMount() {
        this.initState();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleDrag, true)
    }

    handleDrag = () => {
        try {
            const slider = document.querySelector('.horizontal-scroll');
            let isDown = true;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 3; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
            });
        } catch (e) {

        }
    }

    refreshComponent = async (key) => this.setState({ [key]: null });
    resetComponent = async (key) => this.setState({ [key]: null });

    initState = async () => {
        try {
            this.setState({ selectedUser: this.props.location.state.selectedUser })
        } catch (e) {

        }
    }

    onExiting = () => {
        this.setState({ animating: true })
    };

    onExited = () => {
        this.setState({ animating: false })
    };

    next = () => {
        let { animating, activeIndex, selectedUser } = this.state;
        if (animating) return;
        const nextIndex = activeIndex === selectedUser.videos.length - 1 ? 0 : activeIndex + 1;
        this.setState({ activeIndex: nextIndex })
    };

    previous = () => {
        let { animating, activeIndex, selectedUser } = this.state;
        if (animating) return;
        const nextIndex = activeIndex === 0 ? selectedUser.videos.length - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex })
    };

    goToIndex = (newIndex) => {
        let { animating } = this.state;
        if (animating) return;
        this.setState({ activeIndex: newIndex })
    };

    render() {
        let { selectedUser } = this.state;
        let { name, title, images, summary } = selectedUser;
        return (
            <>
                <AppBar />
                <div className="wrapper" >
                    <div className="page-header page-header-small" style={{ backgroundColor: 'grey', height: 680 }}>
                        <Container style={{ maxWidth: '100%', backgroundColor: 'grey', marginTop: '5%' }}>
                            <Row style={{ marginLeft: "10%", marginRight: '10%' }}>
                                <Col md="4">
                                    <div className="card-image">
                                        <img alt="..." src={images.length > 0 ? images[1] : ""}></img>
                                    </div>
                                    <p className="card-description" style={{ textAlign: 'left', color: 'white', fontWeight: 500 }}>
                                        {name ? name : "" + " & " + title ? title : ""}
                                    </p>
                                </Col>
                                <Col md="8">
                                    <p className="card-description" style={{ textAlign: 'left', color: 'white', fontWeight: 500 }}>
                                        {summary.substring(1, summary.length - 1)}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer history={this.props.history} />
            </>
        );
    }
}

export default ProfilePage;
