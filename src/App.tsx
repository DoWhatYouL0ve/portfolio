import React from 'react';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from './components/portfolio/Portfolio';
import {GlobalStyles} from "./components/styles/common/ClobalStyles";
import {ThemeProvider} from "styled-components";
import img from "./components/styles/common/mainBG.jpg";

const theme = {
    colors: {
        headingTextColor: '#000',
        primaryTextColor: '#4d4d4d',
        secondaryTextColor: 'rgba(255, 255, 255, 0.7)',
        whiteTextColor: '#fff',

    },
    bg: {
        header: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${img})`,
        primaryBgColor: '#FF9000',
        whiteBgColor: '#fff',
    }
}

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Header/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;
