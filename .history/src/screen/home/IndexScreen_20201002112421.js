import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { AppBar } from '../../components/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
            openMenu: false,
            openSession: false,
            currentTarget: null
        }
    }

    resetComponent = async (key) => this.setState({ [key]: null });

    renderAppBar() {
        let { openMenu } = this.state;
        let data = { openMenu };
        return (
            <AppBar
                data={data}
                resetComponent={this.resetComponent}
            />
        );
    }

    render() {
        return (
            <div>
                Home
                <Button color="primary" onClick={() => this.props.history.push('/blog')}>Go to Blog</Button>
            </div>
        );
    }
}

export default Home;