import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/shared/Header';
import Main from '../components/Pages/index/Main';
import About from '../components/Pages/index/About';
import Services from '../components/Pages/index/Services';
import Reviews from '../components/Pages/index/Reviews';
import Contact from '../components/Pages/index/Contact';
import Footer from '../components/shared/Footer';

const Page = styled.div`
    margin-top: 100px;
`;

/**
 * Page configuration.
 */
const PageConfig = () => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://use.typekit.net/xws3but.css" />
        </Head>
        <style jsx global>
            {`
                body {
                    margin: 0;
                }
            `}
        </style>
    </React.Fragment>
);

/**
 * Index page.
 */
const Index = () => (
    <Page>
        <PageConfig />
        <Header />
        <Main />
        <About />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
    </Page>
);

export default Index;
