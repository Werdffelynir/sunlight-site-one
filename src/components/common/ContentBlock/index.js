import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './style.scss';


class ContentBlock extends Component {

    constructor(props) {
        super(props);
        this.refContentBlockText = React.createRef();
        this.refContentBlockBackground = React.createRef();
        this.skew = Math.random() * 4 + 4 - Math.random() * 6.5;
        this.rotate = Math.random() * Math.random() * 4.2 ;
    }

    componentDidMount () {
        if(this.refContentBlockText.current && this.refContentBlockBackground.current) {
            let text = this.refContentBlockText.current;
            let background = this.refContentBlockBackground.current;
            // console.dir(text);
            // background.style.width = (6 + (text.clientWidth / innerWidth * 100)) + '%';
            // background.style.height = (8 + (text.clientHeight / innerHeight * 100)) + '%';
            // background.style.transform = `skew(${this.skew}deg) rotate(${this.rotate}deg)`;
        }
    }

    render() {

        let props = this.props;
        let color = this.props.color;
        let them = '';

        switch (color) {
            case 'dark' :
                them = 'dark-them';
                break;
            case 'green' :
                them = 'green-them';
                break;
            default:
                them = '';
        }

        return (
            <div className={'content-block-wrapper'}>

                <div className={'content-block'}>
                    <div className={'content-block-bg ' + them} ref={this.refContentBlockBackground}></div>
                    <div className={'content-block-text'} ref={this.refContentBlockText}>
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
}


export default hot(module)(ContentBlock);
