import React, { Component } from 'react';
import { Routes } from './index';
import WifiOffIcon from '@material-ui/icons/WifiOff';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            isDisconnected: false
        }
    }

    componentDidMount() {
        try {
            this.handleConnectionChange();
            window.addEventListener('online', this.handleConnectionChange);
            window.addEventListener('offline', this.handleConnectionChange);
            this.handleComponentWillMount();
        } catch (error) {

        }
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
                    <WifiOffIcon style={{ height: 80, width: 80, marginTop: '16%' }} color="primary" fontSize="large" />
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