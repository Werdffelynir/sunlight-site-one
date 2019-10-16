import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";
import './style.scss';
import ContentBlock from "../common/ContentBlock";
import PhotoBlock from "../common/PhotoBlock";

class SecUsedTech extends Component {
    render() {
        const imgArray = Array(18).fill({ src: "https://via.placeholder.com/160x80", alt: "" });
        const stackArray = ['PHP', 'JavaScript','Python','Tech','Database','Used','Reack JS','Docker'];
        
        return (
            <section className={classNames('container')}>
                <div className={classNames('tech-elements')}>
                    { imgArray.map((img, iter) => <img src={img.src} alt={img.alt} key={iter} />) }
                </div>

                <div className={classNames('tech-labels')}>
                    { stackArray.map((label, iter) => <span key={iter}>{label}</span>) }
                </div>

                <ContentBlock color={'dark'}>
                    <p>Amet, cum deleniti eum molestias nulla quidem repellat!</p>
                    <p>Ab adipisci at ducimus eligendi esse nam omnis optio perferendis totam ullam! Adipisci aliquam aliquid deserunt dignissimos ea et ex fugit, illum ipsa, nemo nisi pariatur quam quo quos vitae.</p>
                    <p>Aliquam animi aspernatur beatae delectus eos explicabo fugiat fugit inventore ipsa laborum libero maxime nesciunt nulla officia quae quas, recusandae tempore veniam? Animi fugiat mollitia porro quibusdam repellendus saepe sint!</p>
                </ContentBlock>

                {/*<NextButton goto={nextid} />*/}
            </section>
        );
    }
}

export default hot(module)(SecUsedTech);

