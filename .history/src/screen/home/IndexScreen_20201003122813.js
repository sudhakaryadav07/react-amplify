import React, { Component, Fragment } from 'react';
import { WithRoot } from '../../components/index';
import { withStyles, Container, CircularProgress, Typography, TextField, Grid } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { progress } from '../../styles/style';
import { MESSAGES, USER } from '../../data/data';
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
        backgroundColor: theme.palette.secondary.light,
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
            page: "Home",

            searchInput: "",
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

    openDropDown = async (key, value) => this.setState({ [key]: value });

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
                    />
                    <Typography color="textSecondary" style={{
                        opacity: 1,
                        animation: 'fade 2s linear', position: 'absolute', top: '30%', left: '50%', fontFamily: 'Forte', fontSize: 33, color: 'white'
                    }}>
                        {message ? message : ""}
                    </Typography>
                </section>
                <section className={classes.root}>
                    <Container className={classes.container}>
                        <img
                            src={require('../../icons/lines.jpg')}
                            className={classes.curvyLines}
                            alt="curvy lines"
                            height="100%"
                        />


                        <Grid container >
                            <Grid container sm={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <TextField
                                    style={{ width: '20%' }}
                                    size="small"
                                    name="searchInput"
                                    value={searchInput}
                                    id="outlined-basic"
                                    label="Search..."
                                    variant="outlined"
                                    onChange={this.handleSearch} />
                            </Grid>

                            <Grid container sm={12} style={{ justifyContent: 'center' }}>
                                {this.renderUser()}
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default WithRoot(withStyles(materialStyles)(Home));