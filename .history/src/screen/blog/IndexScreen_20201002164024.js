import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { body, bodyContext } from '../../styles/style';

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

    render() {
        return (
            <div>
                {this.renderAppBar()}
                <div style={body}>
                    <div style={{...bodyContext,paddingTop:10,paddingBottom:10}}>
                        <Grid container sm={12} spacing={2} style={{margin:0}}>
                            <Grid container sm={12} style={{ height: 100 }}>
                                gjgh
                            </Grid>
                            <Grid container sm={12} style={{ height: 100 }}>
                                gjgh
                            </Grid>
                        </Grid>
                        {/* <Button color="primary" onClick={() => this.props.history.push('/home')}>Go to Home</Button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;