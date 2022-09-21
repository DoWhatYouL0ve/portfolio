import React from 'react';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Skills} from "./components/skills/Skills";
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
    return (
        <div>
            <Header/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
