import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from 'classnames';
import './style.scss';


class NextButton extends Component {
    render() {

        let goto = '#' + this.props.goto;
        let first = false; // this.props.first || false;

        let FirstButton = first
            ? (<a className={'next-button-first'} href={goto}>
                <span className={'next-button-first-front'}></span>
            </a>)
            : (<a className={'next-button'} href={goto}>
                <span className={'next-button-front'}></span>
            </a>);

        return (
            <div className={'next-button-wrapper'}>
                <div className={classNames('row', 'center')}>
                    <a className={'next-button'} href={goto}>
                        <span className={'next-button-front'}></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default hot(module)(NextButton);
