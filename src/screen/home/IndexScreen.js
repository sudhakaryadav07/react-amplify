import React, { Component, Fragment } from 'react';
import { WithRoot } from '../../components/index';
import { MESSAGES, USER } from '../../data/data';
import { withStyles, Container, CircularProgress, Typography, TextField, Grid } from '@material-ui/core';
import { AppBar, AppFooter } from '../../components/index';
import { progress } from '../../styles/style';
import { UserCard } from './components/cards/index';

const materialStyles = (theme) => ({
    section1: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
            minHeight: 500,
            maxHeight: 1300,
        },
    },
    root: {
        display: 'flex',
        overflow: 'hidden',
        background: '-webkit-linear-gradient(to right, #d3cce3, #e9e4f0)',
    },
    container1: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(2),
        display: 'flex',
        position: 'relative',
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -69,
        left: -53
    },
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            intrest: "",
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
                    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                );

            } else {
                this.setState({ intrest: e.target.value });
                filteredUser = USER.filter(item => {
                    let intrest = item.intrest.filter(data =>
                        data.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                    )
                    if (intrest.length > 0) {
                        return item;
                    }
                    return null;
                }
                );
                console.log(filteredUser)
            }
            this.setState({ users: filteredUser });
            this.resetComponent('gKeyLoader');
        } catch (e) {

        }
    }

    renderAppBar() {
        return (
            <AppBar />
        );
    }

    renderUser() {
        let { users } = this.state;
        return users.map((data, i) => {
            return (
                <UserCard
                    key={i}
                    i={i}
                    data={data}
                />
            );
        })
    }

    renderLoader() {
        let { gKeyLoader } = this.state;
        if (gKeyLoader) {
            return (
                <CircularProgress style={progress} />
            );
        }
    }

    render() {
        let { classes } = this.props;
        let { message, intrest, search } = this.state;
        return (
            <Fragment>
                {this.renderAppBar()}
                <section className={classes.section1}>
                    <img
                        src={require('../../icons/inspire.jpg')}
                        alt="wonder"
                        width="100%"
                        height="700"
                        style={{ position: 'absolute', opacity: 0.9 }}
                    />
                    <Typography color="textSecondary" style={{
                        opacity: 1,
                        animation: 'fade 2s linear', position: 'relative', top: '11%', left: '40%', fontFamily: 'Forte', fontSize: 33, color: '#2d2c2b'
                    }}>
                        {message ? message : ""}
                    </Typography>
                </section>
                <section className={classes.root}>
                    <Container className={classes.container}>
                        <Grid container >
                            <Grid container item sm={11} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField
                                    style={{ width: '30%', marginLeft: '7%' }}
                                    size="small"
                                    name="intrest"
                                    value={intrest}
                                    id="outlined-basic"
                                    label="Intrest"
                                    variant="outlined"
                                    onChange={this.handleChange} />
                                <TextField
                                    style={{ width: '30%', marginRight: '-1.9%' }}
                                    size="small"
                                    name="search"
                                    value={search}
                                    id="outlined-basic"
                                    label="Inspiring Name"
                                    variant="outlined"
                                    onChange={this.handleChange} />
                            </Grid>
                            <Grid container item sm={12} style={{ justifyContent: 'center' }}>
                                {this.renderUser()}
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section>
                    <AppFooter />
                </section>
            </Fragment>
        );
    }
}

export default WithRoot(withStyles(materialStyles)(Home));