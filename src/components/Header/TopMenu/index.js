import React, { Component } from 'react';
import { hot } from 'react-hot-loader';


class TopMenu extends Component {
    render() {
        return (
            <nav>
                <a href="">MENU</a>
            </nav>
        );
    }
}

export default hot(module)(TopMenu);

