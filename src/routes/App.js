import React, { Component } from 'react';
import { Routes } from './index';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "../aws-exports";
import {getRoleModelsByName} from '../graphql/queries'
Amplify.configure(awsExports);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisconnected: false
        }
        this.test()
    }

    componentDidMount() {
        try {
            // console.log("hello...1111111111")
            this.handleConnectionChange();
            window.addEventListener('online', this.handleConnectionChange);
            window.addEventListener('offline', this.handleConnectionChange);
            // this.handleComponentWillMount();
            
        } catch (error) {
            console.log(error)
        }
    }

    async test(){
        console.log("hello...")
        const todoData = await API.graphql(graphqlOperation(getRoleModelsByName, {name:'Kelly'}))
        console.log(todoData)
    }

    componentWillUnmount() {
        window.onbeforeunload = function (e) {
            window.onunload = function () {
                window.localStorage.clear();
            }
        };
    }

    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        if (condition === 'online') {
            const webPing = setInterval(
                () => {
                    fetch('//google.com', {
                        mode: 'no-cors',
                    })
                        .then(() => {
                            this.setState({ isDisconnected: false }, () => {
                                return clearInterval(webPing)
                            });
                        }).catch(() => this.setState({ isDisconnected: true }))
                }, 2000);
            return;
        }

        return this.setState({ isDisconnected: true });
    }


    render() {
        let { isDisconnected } = this.state;
        if (isDisconnected === true) {
            return (
                <div style={{ textAlign: 'center', height: "100vh", backgroundColor: 'lightgrey' }}>
                    <i  style={{ height: 80, width: 80, marginTop: '16%' }} className="fab wifi"></i>
                    <p style={{ fontSize: 40 }}>No Internet Connection !</p>
                </div>
            )
        } else {
            return (
                <Routes />
            );
        }
    }
};

export default App;