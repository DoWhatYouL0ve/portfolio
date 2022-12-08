import {GlobalStyles, theme} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";

import {NavBar, ButtonOnTop, Portfolio, Skills, Footer, Contacts, About, Header} from './components'

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
