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

            searchInput: "",
            gKeyLoader: false,
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
            this.refreshComponent('gKeyLoader');
            this.setState({ searchInput: e.target.value });
            let filteredUser = USER.filter(item => item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
            this.setState({ users: filteredUser });
            this.resetComponent('gKeyLoader');
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
        let { users } = this.state;
        return users.map((data, i) => {
            return (
                <Card key={i} style={{ backgroundColor: 'red', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 16 }}>{data.name}</Card>
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
        let { message, searchInput } = this.state;
        return (
            <div>
                {this.renderAppBar()}
                <div style={body}>
                    <div style={bodyContext}>
                        <div style={{ height: '20%' }}>
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

                        <div style={{ height: '70%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            <div style={{ height: '100%', overflow: 'auto',padding:10 }}>
                                {this.renderUser()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;