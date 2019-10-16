import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './style.scss';
import MenuLinksItems from "../../../models/MenuLinksItems";



class TopMenuComplete extends Component {
    render() {

        const listItems = Object.values(MenuLinksItems).map((item, iter) =>
            <li key={item.id}>
                <a key={item.id} href={'#' + item.link}>{item.title}</a>
            </li>
        );
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#intro" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {listItems}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default hot(module)(TopMenuComplete);

