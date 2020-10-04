import React, { Component, Fragment } from 'react';
import { Grid, Chip, withStyles, Typography, IconButton } from '@material-ui/core';
import { Star, Twitter, LinkedIn } from '@material-ui/icons';
import { AppBar, AppFooter, WithRoot } from '../../components/index';

const materialStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    }
})

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null
        }
    }

    UNSAFE_componentWillMount() {
        document.addEventListener('scroll', this.handleDrag, true)
        this.initState();
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

    initState = async () => {
        try {
            this.setState({ selectedUser: this.props.location.state.selectedUser })
        } catch (e) {

        }
    }

    refreshComponent = async (key) => this.setState({ [key]: null });
    resetComponent = async (key) => this.setState({ [key]: null });


    render() {
        let { selectedUser } = this.state;
        let { firstName, lastName, title, videos, summary, books, interest } = selectedUser;
        return (
            <Fragment>
                <AppBar />
                {selectedUser ? <section style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid sm={9} container item justify="center" >
                        <Grid container item sm={6}>
                            <Grid container justify="flex-start" alignItems="flex-end">
                                {interest.map((item, i) => <Chip
                                    key={i}
                                    style={{ cursor: 'pointer', marginRight: 10, backgroundColor: '#1a8af9', color: "white" }}
                                    icon={<Star style={{ color: 'white' }} />}
                                    label={item.charAt(0).toUpperCase() + item.slice(1)} />)}
                            </Grid>
                            <Grid container justify="flex-start" alignItems="flex-end">
                                <Typography variant="h2" style={{ color: "black", fontFamily: 'Graphik Black","Arial Black",Sans-Serif', padding: '5px 0px 5px 0px' }}>
                                    {firstName + " " + lastName}
                                </Typography>
                            </Grid>
                            <Grid container justify="flex-start" alignItems="flex-start" style={{ padding: '0px 0px 5px 0px' }}>
                                <Typography variant="h5">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid container justify="flex-start" alignItems="flex-start" style={{ padding: '0px 0px 5px 0px' }}>
                                <IconButton>
                                    <LinkedIn style={{ fontSize: 33, color: '#1a8af9' }} />
                                </IconButton>
                                <IconButton>
                                    <Twitter style={{ fontSize: 33, color: '#1a8af9' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item sm={6}><img
                            alt=""
                            src={require(`../../icons/${firstName+" "+lastName}.jpg`)}
                            style={{ width: '100%', height: 300 }}
                        /></Grid>
                    </Grid>
                </section> : "Loading..."}
                <section style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f2f2f2', paddingBottom: '1%' }}>
                    <Grid sm={9} container item justify="flex-start" >
                        <Grid sm={10} container item justify="flex-start" >
                            <Typography style={{ fontFamily: 'Graphik Regular","Arial",Sans-Serif', fontSize: 45, fontWeight: 'bold', lineHeight: '1.6em' }}>
                                About {firstName}
                            </Typography>
                            <Typography variant="h5" style={{ fontFamily: 'Graphik Regular","Arial",Sans-Serif', fontSize: '1rem', lineHeight: '1.6em' }}>
                                {summary}
                            </Typography>
                        </Grid>
                    </Grid>
                </section>
                <section style={{ display: 'flex', justifyContent: 'center', paddingBottom: '1%' }}>
                    <Grid sm={12} container item justify="center">
                        <Grid sm={9} container item justify="flex-start" >
                            <Typography style={{ fontFamily: 'Graphik Regular","Arial",Sans-Serif', fontSize: 45, fontWeight: 'bold', lineHeight: '1.6em' }}>
                                Watch {firstName}
                            </Typography>
                            <Grid sm={12} container spacing={2} item justify="space-evenly" >
                                <div className="horizontal-scroll">
                                    {videos.map((data, i) => {
                                        return (
                                            <div key={i} className="item">
                                                <iframe
                                                    title={i}
                                                    width="400"
                                                    height="220"
                                                    src={data.title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen />
                                            </div>
                                        )
                                    })}

                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
                <section style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f2f2f2', paddingBottom: '1%' }}>
                    <Grid sm={12} container item justify="center">
                        <Grid sm={9} container item justify="flex-start" >
                            <Typography style={{ fontFamily: 'Graphik Regular","Arial",Sans-Serif', fontSize: 45, fontWeight: 'bold', lineHeight: '1.6em' }}>
                                Recommended Books
                            </Typography>
                            <Grid sm={12} container spacing={2} item justify="space-evenly" >
                                <div className="horizontal-scroll">
                                    {books.map((data, i) => {
                                        return (
                                            <div className="item" key={i} style={{ width: 150, height: 210, marginRight: 20, backgroundImage: `url(${data.thumbnail})` }} />
                                        )
                                    })}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <AppFooter />
                </section>
            </Fragment >
        );
    }
}

export default WithRoot((withStyles(materialStyles))(Blog));