import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";
import './style.scss';


class SecJobs extends Component {
    render() {


        const title = this.props.title;
        const nextid = this.props.nextid;

        return (
            <section className={classNames('container')}>

                    <div className="row">


                        <div className="col s12">
                            <div className="card table-color">
                                <div className="card-content white-text">
                                    <span className="card-title">Full-Stack Developer</span>

                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                    <p>Containing small bits of information.
                                        Convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">Send request</a>
                                </div>
                            </div>

                            <div className="card table-color">
                                <div className="card-content white-text">
                                    <span className="card-title">JavaScript Developer</span>

                                    <p>Containing small bits of information.
                                        Convenient because I require little markup to use effectively.</p>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">Send request</a>
                                </div>
                            </div>

                            <div className="card table-color">
                                <div className="card-content white-text">
                                    <span className="card-title">Sales Manager</span>

                                    <p>Good at containing small bits of information. Very simple card.
                                        I am convenient because I require little markup to use effectively.</p>
                                    <p>Containing small bits of information.
                                        Convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">Send request</a>
                                </div>
                            </div>
                        </div>


                    </div>

                <NextButton goto={nextid} />

            </section>
        );
    }
}

export default hot(module)(SecJobs);

