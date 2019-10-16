import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from 'classnames';
import './style.scss';


class PhotoBlock extends Component {


    render() {

        let props = this.props;
        let position = this.props.position || 'top-right';
        let color = this.props.color || 'green';

        return (
            <div className={classNames('photo-block')}>
                <div className={classNames('photo-element', 'position-' + position, 'them-' + color)}>
                    <img src="#https://via.placeholder.com/150" alt=""/>
                </div>
            </div>
        );
    }
}

export default hot(module)(PhotoBlock);

