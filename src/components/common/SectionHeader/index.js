import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import './style.scss';

/**
 *
 * Attr backgroundColor:
 *      transparent
 *      primary, primary-graphic, primary-text
 *      secondary, secondary-graphic, secondary-text
 *
 *
 */
class SectionHeader extends Component {


    constructor(props) {
        super(props);
        this.elementSectionHeader = React.createRef();
    }

    componentDidMount() {
        if (this.props.scroll && this.elementSectionHeader.current) {
            this.props.scroll.add(
                this.elementSectionHeader.current.offsetTop,
                this.elementSectionHeader.current
            );
        }
    }

    render() {

        let props = this.props;
        let backgroundColor = this.props.backgroundColor || 'transparent';

        if (props.title)
            return (
                <div id={props.id} ref={this.elementSectionHeader} >
                    <div className={'title'}>
                        <h2 className={classNames('container')}>{props.title}</h2>
                    </div>
                    <div className={classNames('section-background', 'background-' + backgroundColor)}>
                        {props.children}
                    </div>
                </div>
            );
        else
            return (
                <div id={props.id}>
                    {props.children}
                </div>
            );
    }
}

export default hot(module)(SectionHeader);

