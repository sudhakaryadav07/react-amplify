import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Home
                <Button onClick={() => this.props.history.push('/blog')}>Go to Blog</Button>
            </div>
        );
    }
}

export default Home;