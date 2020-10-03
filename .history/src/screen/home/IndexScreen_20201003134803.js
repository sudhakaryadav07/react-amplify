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
        marginTop: theme.spacing(7),
        // backgroundColor: theme.palette.secondary.light,
        background: '#d3cce3',
        background: '-webkit-linear-gradient(to right, #d3cce3, #e9e4f0)',
        background: 'linear-gradient(to right, #d3cce3, #e9e4f0)'
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
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -69,
        left: -53,
        // width:'100%'
    },
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            gKeyLoader: false,
            users: USER,
            message: "Vow to stop worrying and start loving."
        }
    }

    UNSAFE_componentWillMount() {
        // this.initState();
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

    handleSearch = (e) => {
        try {
            this.refreshComponent('gKeyLoader');
            this.setState({ searchInput: e.target.value });
            let filteredUser = USER.filter(item => item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
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
        let { message, searchInput } = this.state;
        return (
            <Fragment>
                {this.renderAppBar()}
                <section className={classes.section1}>
                    <img
                        src={require('../../icons/inspire.png')}
                        alt="wonder"
                        width="100%"
                        height="600"
                        style={{ position: 'absolute', opacity: 0.7 }}
                    />
                    <Typography color="textSecondary" style={{
                        opacity: 1,
                        animation: 'fade 2s linear', position: 'relative', top: '1%', left: '30%', fontFamily: 'Forte', fontSize: 33, color: '#2d2c2b'
                    }}>
                        {message ? message : ""}
                    </Typography>

                </section>
                <section className={classes.root}>
                    <Container className={classes.container}>
                        <Grid container >
                            <Grid container sm={11} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <TextField
                                    style={{ width: '30%', marginRight: '-2%' }}
                                    size="small"
                                    name="searchInput"
                                    value={searchInput}
                                    id="outlined-basic"
                                    label="Inspiring Name"
                                    variant="outlined"
                                    onChange={this.handleSearch} />
                            </Grid>

                            <Grid container sm={12} style={{ justifyContent: 'center' }}>
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