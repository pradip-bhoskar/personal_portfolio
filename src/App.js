import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/IntroSection/Intro";
import Websites from "./Components/Websites/Websites";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Skills/Skills";
import Portfolio from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Certificates from "./Components/Certificates/Certificates";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"

      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}

    >
      <Navbar></Navbar>
      <Intro></Intro>
      <Websites></Websites>
      <Experience></Experience>
      <Work></Work>
      <Portfolio></Portfolio>
      <Certificates></Certificates>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;