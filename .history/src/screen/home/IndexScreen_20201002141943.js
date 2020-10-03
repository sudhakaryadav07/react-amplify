import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { body, bodyContext } from '../../styles/style';
import { MESSAGES, USER } from '../../data/data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
            openMenu: false,
            openSession: false,
            currentTarget: null,

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
        return USER.map((data, i) => {
            return (
                <Card style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 16 }}>{data.name}</Card>
            );
        })
    }

    render() {
        let { message } = this.state;
        return (
            <div>
                {this.renderAppBar()}
                <div style={body}>
                    <div style={bodyContext}>
                        <div style={{ height: '20%', padding: '2% 20% 2% 20%' }}>
                            <Card style={{
                                backgroundColor: "#e7eff9",
                                backgroundImage: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)"
                            }}>
                                <CardContent style={{ height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 16 }}>
                                    <Typography color="textSecondary" style={{ fontFamily: 'system-ui', fontSize: 20, color: 'black' }}>
                                        {message ? message : "..."}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div style={{ height: '10%' }}>
                            sdfsA
                        </div>
                        <div style={{ height: '70%', overflow: 'auto' }}>
                            {this.renderUser()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;