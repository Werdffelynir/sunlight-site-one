import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import TopMenu from "./TopMenu";
import TopMenuComplete from "./TopMenuComplete";
import classNames from "classnames";


class Header extends Component {
    render() {

        let complete = this.props.complete || true;

        if (complete)
            return (
                <header className={classNames('menu-complete')}>
                    <div className={'container'}>
                        <TopMenuComplete />
                    </div>
                </header>
            );
        else
            return (
                <header className={classNames('container')}>
                    <TopMenu />
                </header>
            );
    }
}

export default hot(module)(Header);

