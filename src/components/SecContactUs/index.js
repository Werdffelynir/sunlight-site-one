import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";


class SecContactUs extends Component {
    render() {


        const title = this.props.title;
        const nextid = this.props.nextid;

        return (
            <section className={classNames('container')}>

                <h3>Office place: Kiev, 00000, Street on 23/10</h3>
                <h4>office@domain.com</h4>
                <h4>...</h4>

            </section>
        );
    }
}

export default hot(module)(SecContactUs);

