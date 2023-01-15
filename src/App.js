import './App.css';

import Welcome from "./components/Welcome"
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
