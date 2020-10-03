import React, { Component, Fragment } from 'react';
import { WithRoot } from '../../components/index';
import { withStyles, Card,Container, CardContent, CircularProgress, Typography, TextField, Grid } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { progress } from '../../styles/style';
import { userCard, userCardBody } from './style';
import { MESSAGES, USER } from '../../data/data';
import USERPAGE from './components/user';


const materialStyles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    }
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",

            searchInput: "",
            gKeyLoader: false,

            users: USER,
            message: null
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
            let mt = i === 0 ? '2%' : 0;
            return (
                <Card key={i} onClick={() => this.props.history.push('/blog')} style={{ ...userCard, margin: `${mt} 0px 2% 0px`, }}>
                    <Grid container sm={12} style={userCardBody}>
                        <Grid item container sm={4} style={{ height: '100%', backgroundColor: '#f5f5dc' }}>
                            <Grid item sm={12} style={{ height: '80%' }}>
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img alt="" style={{ height: '92%', width: '39%' }} src={require(`../../icons/user.png`)} />
                                </div>
                            </Grid>
                            <Grid item sm={12} style={{ height: '20%' }}>
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography color="textSecondary" style={{ fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                        {data.name} - {data.title}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="textSecondary" style={{ fontFamily: 'system-ui', fontSize: 20, color: 'black' }}>
                                Bio Flash
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
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
        let {classes}=this.props;
        let { message, searchInput } = this.state;
        return (
            <Fragment>
                {this.renderAppBar()}
                <img
                    src={require('../../icons/inspire.png')}
                    alt="wonder"
                    width="100%"
                    height="600"
                />
                <section className={classes.root}>
                    <Container className={classes.container}>
                        <img
                            src={require('../../icons/lines.png')}
                            className={classes.curvyLines}
                            alt="curvy lines"
                        />
                    </Container>
                </section>
                {/* <div >
                    <Card style={{
                        backgroundColor: "#e7eff9",
                        backgroundImage: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)"
                    }}>
                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 16 }}>
                            <Typography color="textSecondary" style={{ fontFamily: 'system-ui', fontSize: 20, color: 'black' }}>
                                {message ? message : "..."}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div >
                    <TextField
                        fullWidth
                        name="searchInput"
                        value={searchInput}
                        id="outlined-basic"
                        label="Search..."
                        variant="outlined"
                        onChange={this.handleSearch} />
                </div> */}

                {/* <div >
                    {this.renderUser()}
                </div> */}
            </Fragment>
        );
    }
}

export default WithRoot(withStyles(materialStyles)(Home));