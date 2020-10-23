import React, { Component } from "react";
import {
    Button, Carousel,
    CarouselItem,
    CarouselIndicators, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";
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
        let { selectedUser, activeIndex } = this.state;
        let { firstName, lastName, title, videos, summary, books, interest } = selectedUser;
        return (
            <>
                <AppBar />
                <div className="wrapper" >
                    <div className="page-header clear-filter page-header-small" filter-color="blue" >
                        <div className="page-header-image" style={{ backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")" }} ></div>
                        <Container>
                            <div className="photo-container" >
                                <img alt="..." style={{ height: '15%', width: '15%', borderRadius: '50%' }} src={require(`../../icons/${firstName + " " + lastName}.jpg`)}></img>
                            </div>
                            <h3 className="title">{firstName + " " + lastName}</h3>
                            <p className="category">{title}</p>
                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                <Col md="2">
                                    <div className="social-description">
                                        <h2>26</h2>
                                        <p>Comments</p>
                                    </div>
                                </Col>
                                <Col md="2">
                                    <div className="social-description">
                                        <h2>26</h2>
                                        <p>Comments</p>
                                    </div>
                                </Col>
                                <Col md="2">
                                    <div className="social-description">
                                        <h2>48</h2>
                                        <p>Bookmarks</p>
                                    </div>
                                </Col>
                            </Row>
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

                        <div style={{ textAlign: 'center' }}>
                            {interest.map((item, i) => <Button style={{ borderRadius: 20, fontSize: 12, padding: 8, backgroundColor: 'orange', margin: 10 }} key={i}>{interest[i]}</Button>)}
                        </div>


                        <h3 className="title" style={{ textAlign: 'center' }}>About me</h3>
                        <h5 className="description text-center">
                            {summary}
                        </h5>
                    </Container>
                </div>
                <section>
                    <div className="page-header clear-filter page-header-verysmall">
                        <div className="page-header-image" style={{ backgroundImage: "url(" + require("assets/img/bg43.jpg") + ")" }} ></div>
                        <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Col md={12} >
                                <h3 className="title" style={{ textAlign: 'center' }}>
                                    Watch {firstName}
                                </h3>
                                <Col md={12} style={{ padding: 0 }}>
                                    <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                                        <CarouselIndicators
                                            items={videos}
                                            activeIndex={activeIndex}
                                            onClickHandler={this.goToIndex}
                                        />
                                        {videos.map((data, i) => {
                                            return (
                                                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={i}  >
                                                    <div className="page-header header-filter" style={{ display: 'flex',minHeight:0, justifyContent: 'center', alignItems: 'center' }}>
                                                        <div key={i} className="item" style={{ margin: '50px 40px 50px 40px' }}>
                                                            <iframe
                                                                style={{ borderRadius: 5 }}
                                                                title={i}
                                                                width="600"
                                                                height="320"
                                                                src={data.title}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen />
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            );
                                        })}
                                        <a
                                            className="left carousel-control carousel-control-prev"
                                            data-slide="prev"
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.previous();
                                            }}
                                            role="button"
                                        >
                                            <span className="now-ui-icons arrows-1_minimal-left" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a
                                            className="right carousel-control carousel-control-next"
                                            data-slide="next"
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.next();
                                            }}
                                            role="button"
                                        >
                                            <span className="now-ui-icons arrows-1_minimal-right" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </Carousel>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section>
                    <div className="page-header clear-filter page-header-vvsmall" filter-color="red">
                        <div className="page-header-image" style={{ backgroundImage: "url(" + require("assets/img/project16.jpg") + ")" }} ></div>
                        <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Col md={11} >
                                <h3 className="title" style={{ color: 'grey', textAlign: 'center' }}>
                                    Recommended Books
                                </h3>
                                <Col md={12} container spacing={2} item justify="space-evenly" >
                                    <div className="horizontal-scroll">
                                        {books.map((data, i) => {
                                            return (
                                                <div className="item" key={i}
                                                    style={{
                                                        margin: '20px 10px 20px 10px',
                                                        borderRadius: 2, width: 150, height: 210, marginRight: 20,
                                                        backgroundImage: `url(${data.thumbnail})`
                                                    }} />
                                            )
                                        })}
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </section>
                <Footer history={this.props.history}/>
            </>
        );
    }
}

export default ProfilePage;
