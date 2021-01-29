import React, { Component } from "react";
import { Button, Container, UncontrolledTooltip } from "reactstrap";
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
                    <div className="page-header clear-filter page-header-small" filter-color="blue" >
                        <div className="page-header-image" style={{ backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")" }} ></div>
                        <Container>
                            <div className="circular" >
                                <img alt="..." style={{ minWidth: 250, borderRadius: '50%' }} src={images.length > 0 ? images[1] : ""}></img>
                            </div>
                            <h3 className="title">{name}</h3>
                            <p className="category" style={{padding:'5% 0px'}}>{title ? title : "Default Title"}</p>
                        </Container>
                    </div>
                </div>
                <div className="section">
                    <Container>
                        <div className="button-container" style={{ marginTop: '-108px', textAlign: 'center' }}>
                            <Button
                                className="btn-round mr-1"
                                color="info"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                size="lg"
                            >
                                Follow
                            </Button>
                            <Button
                                className="btn-round btn-icon mr-1"
                                color="default"
                                href="#pablo"
                                id="tooltip871723210"
                                onClick={(e) => e.preventDefault()}
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip871723210">
                                Follow me on Twitter
              </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                href="#pablo"
                                id="tooltip259363830"
                                onClick={(e) => e.preventDefault()}
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip259363830">
                                Follow me on Instagram
              </UncontrolledTooltip>
                        </div>
                        <h3 className="title" style={{ textAlign: 'center' }}>About me</h3>
                        <h5 >
                            {summary.substring(1, summary.length-1)}
                        </h5>
                    </Container>
                </div>
                <Footer history={this.props.history} />
            </>
        );
    }
}

export default ProfilePage;
