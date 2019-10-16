import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";
import ContentBlock from "../common/ContentBlock";
import PhotoBlock from "../common/PhotoBlock";
import './style.scss';


class SecAboutUs extends Component {




    render() {

        const title = this.props.title;
        const nextid = this.props.nextid;

        return (
            <section className={classNames('container')}>

                <div className={classNames('about-us')}>
                    <ContentBlock color={'green'}>
                        <PhotoBlock position={'top-right'}/>
                        <PhotoBlock position={'middle-left'} color={'greenmiddle'} />
                        <PhotoBlock position={'bottom-center'} color={'greenligth'} />

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum cupiditate ex, explicabo id
                            numquam placeat possimus quam, rerum, sint soluta suscipit? Amet, cum deleniti eum molestias
                            nulla quidem repellat!</p><p>Ab adipisci at ducimus eligendi esse nam omnis optio perferendis
                        totam ullam! Adipisci aliquam aliquid deserunt dignissimos ea et ex fugit, illum ipsa, nemo nisi
                        pariatur quam quo quos vitae.</p><p>Aliquam animi aspernatur beatae delectus eos explicabo fugiat
                        fugit inventore ipsa laborum libero maxime nesciunt nulla officia quae quas, recusandae tempore
                        veniam? Animi fugiat mollitia porro quibusdam repellendus saepe sint!</p>

                    </ContentBlock>
                </div>
                {/*<NextButton goto={nextid} />*/}

            </section>
        );
    }
}

export default hot(module)(SecAboutUs);

