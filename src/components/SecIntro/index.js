import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";
import PrintText from "../common/PrintText";
import './style.scss';


class SecIntro extends Component {

    constructor (props) {
        super(props);
        this.startedIntroAnimate = false;
        this.introAnimeTextRef = React.createRef();
    }

    componentDidMount() {
        this.textIntroAnimate();
    }

    textIntroAnimate () {
        if (!this.startedIntroAnimate) {
            this.startedIntroAnimate = true;
            const printText = new PrintText(this.introAnimeTextRef.current,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad assumenda cum deleniti iusto repellendus saepe!');
            printText.start();
        }
    }

    render() {
        const nextid = this.props.nextid;

        return (
            <section className={'container'}>

                <div className={'intro-anime'}>
                    <div className={'intro-anime-lcub'}>&#123;</div>
                    <div className={'intro-anime-text'} ref={this.introAnimeTextRef}>Intro text</div>
                    <div className={'intro-anime-rcub'}>&#125;</div>
                </div>

                <hr/>

                <div className={classNames('intro-text ', 'center')}>
                    <p>Cum deserunt dolorum id illum in magni necessitatibus nisi tenetur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci assumenda illum magni, quaerat quas quia quo rerum sapiente tempore voluptatem!
                        Consectetur dolorum id illum in magni necessitatibus nisi tenetur.</p>

                </div>
                <NextButton goto={nextid} first={true} />

            </section>
        );
    }
}

export default hot(module)(SecIntro);

