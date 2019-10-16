import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import './style.scss';


class Footer extends Component {
    render() {

        let complete = this.props.complete || true;
        let UpButton = (
            <a href={'#container-1'} className={'up-button'}>
                Up
            </a>
        );

        if (complete)
            return (
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l7 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize
                                    your footer content.</p>
                            </div>
                            <div className="col l3 offset-l2 s12">
                                <h5 className="white-text">We In Social Network</h5>
                                <ul>
                                    <li><a className="yellow-text text-lighten-3" href="http://github.com">Github</a></li>
                                    <li><a className="yellow-text text-lighten-3" href="http://github.com">LinkedIn</a></li>
                                    <li><a className="yellow-text text-lighten-3" href="http://github.com">Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container center-align">
                            <span className="grey-text">Company Name &copy; 2019 Copyright Text</span>
                        </div>
                    </div>
                </footer>
            );
        else
            return (
                <footer className={classNames('container')}>
                    <h1>Footer Mobile</h1>
                </footer>
            );
    }
}

export default hot(module)(Footer);

