import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Blog
                <Button color="primary" onClick={() => this.props.history.push('/home')}>Go to Home</Button>
            </div>
        );
    }
}

export default Blog;