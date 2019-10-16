import React, { Component } from 'react';
import { hot } from 'react-hot-loader';


class ModalBox extends Component {
    render() {

        let props = this.props;

        return (
            <div>
                <h2>ModalBox</h2>
            </div>
        );
    }
}

export default hot(module)(ModalBox);

