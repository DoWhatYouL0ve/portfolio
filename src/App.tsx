import React from 'react';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from './components/portfolio/Portfolio';
import {GlobalStyles, theme} from "./components/styles/common/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {ButtonOnTop} from "./components/buttonOnTop/ButtonOnTop";
import {NavBar} from "./components/nav/NavBar";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <ButtonOnTop/>
                <Header/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
                <Footer/>
                <NavBar/>
            </ThemeProvider>
        </div>
    );
}

export default App;
