import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from 'classnames';
import SectionHeader from "./common/SectionHeader";
import Header from "./Header";
import SecIntro from "./SecIntro";
import SecWhatWeDo from "./SecWhatWeDo";
import { Modal, Button } from 'react-materialize';
import SecAboutUs from "./SecAboutUs";
import SecUsedTech from "./SecUsedTech";
import SecOurProjects from "./SecOurProjects";
import SecJobs from "./SecJobs";
import SecContactUs from "./SecContactUs";
import Footer from "./Footer";
import MenuLinksItems from "../models/MenuLinksItems";



class App extends Component {

    render() {

        return (
            <div id="page">

                <Header />

                <SectionHeader
                    id={'intro'}
                    scroll={scroll} >
                    <SecIntro nextid={MenuLinksItems.AboutUs.link} />
                </SectionHeader>

                <SectionHeader
                                id={MenuLinksItems.AboutUs.link}
                                title={MenuLinksItems.AboutUs.title} >
                    <SecAboutUs nextid={MenuLinksItems.WhatWeDo.link} />
                </SectionHeader>

                <SectionHeader
                                id={MenuLinksItems.WhatWeDo.link}
                                title={MenuLinksItems.WhatWeDo.title}
                                backgroundColor={'secondary'}>
                    <SecWhatWeDo nextid={MenuLinksItems.UsedTech.link} />
                </SectionHeader>

                <SectionHeader
                                id={MenuLinksItems.UsedTech.link}
                                title={MenuLinksItems.UsedTech.title}
                                >
                    <SecUsedTech nextid={MenuLinksItems.OurProjects.link} />
                </SectionHeader>

                <SectionHeader
                                id={MenuLinksItems.OurProjects.link}
                                title={MenuLinksItems.OurProjects.title}
                                backgroundColor={false}>
                    <SecOurProjects nextid={MenuLinksItems.Jobs.link} />
                </SectionHeader>

                <SectionHeader
                                id={MenuLinksItems.Jobs.link}
                                title={MenuLinksItems.Jobs.title}
                                backgroundColor={'secondary'}>
                    <SecJobs nextid={MenuLinksItems.ContactUs.link} />
                </SectionHeader>

                <SectionHeader
                                id={MenuLinksItems.ContactUs.link}
                                title={MenuLinksItems.ContactUs.title}
                                backgroundColor={''}>
                    <SecContactUs  />
                </SectionHeader>

                <Footer />

            </div>
        );
    }
}

export default hot(module)(App);
