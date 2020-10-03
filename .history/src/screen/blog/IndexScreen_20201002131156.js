import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { AppBar } from '../../components/index';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Blog",
            openMenu: false,
            openSession: false,
            currentTarget: null
        }
    }

    refreshComponent = async (key) => this.setState({ [key]: null });
    resetComponent = async (key) => this.setState({ [key]: null });

    openDropDown= async (key,value) => this.setState({ [key]: value });

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

    render() {
        return (
            <div>
                {this.renderAppBar()}
                <Button color="primary" onClick={() => this.props.history.push('/home')}>Go to Home</Button>
            </div>
        );
    }
}

export default Blog;