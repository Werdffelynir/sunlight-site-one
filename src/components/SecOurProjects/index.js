import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";


class SecOurProjects extends Component {
    render() {
        const title = this.props.title;
        const nextid = this.props.nextid;
        return (
            <section className={classNames('container')}>

                <p>section content...</p>

                <NextButton goto={nextid} />

            </section>
        );
    }
}

export default hot(module)(SecOurProjects);

