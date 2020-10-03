import React, { Component } from 'react';
import { Card, CardContent, CircularProgress, Typography, TextField } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { progress, progressContainer, body, bodyContext } from '../../styles/style';
import { MESSAGES, USER } from '../../data/data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
            openMenu: false,
            openSession: false,

            searchInput:"",
            gKeyLoader: null,
            currentTarget: null,

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
            this.setState({ searchInput: e.target.value });
            // let filteredUser=USER.
        } catch (e) {

        }
    }

    renderAppBar() {
        let { page, openMenu, openSession, currentTarget } = this.state;
        let data = { page, openMenu, openSession, currentTarget };
        return (
            <AppBar
                data={data}
                openDropDown={this.openDropDown}
                resetComponent={this.resetComponent}
            />
        );
    }

    renderUser() {
        let { users,searchInput } = this.state;
        return users.map((data, i) => {
            return (
                <Card style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 16 }}>{data.name}</Card>
            );
        })
    }

    renderLoader() {
        let { gKeyLoader } = this.state;
        if (gKeyLoader) {
            return (
                <div style={progressContainer}>
                    <CircularProgress style={progress} />
                </div>
            );
        }
    }

    render() {
        let { message ,searchInput} = this.state;
        return (
            <div>
                {this.renderAppBar()}
                <div style={body}>
                    <div style={bodyContext}>
                        <div style={{ padding: '2% 20% 2% 20%' }}>
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
                        <div style={{ height: '10%', padding: '0px 20%' }}>
                            <TextField
                                fullWidth
                                name="searchInput"
                                value={searchInput}
                                id="outlined-basic"
                                label="Search..."
                                variant="outlined"
                                onChange={this.handleSearch} />
                        </div>
                        <div style={{ height: '70%', overflow: 'auto' }}>
                            {this.renderUser()}
                            {this.renderLoader()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;