import './App.scss';
import Menu from '../src/components/Menu';
import Section from '../src/components/Section';
import Testimonial from '../src/components/Testimonial';
import Gallery from '../src/components/Gallery';
import Footer from '../src/components/Footer';
import useScreenSize from '../src/hooks/useScreenSize';
import { useState } from 'react';


function App() {

  const screenSize = useScreenSize()
  const [menuIsActive, setMenuIsActive] = useState(false);

  /* opens and closes hamburger menu */
  const activateMenu = () => 
    setMenuIsActive(!menuIsActive);

  return (
    <>
      <Menu 
        screenSize={screenSize}
        menuIsActive={menuIsActive}
        activateMenu={activateMenu}/>
      <Section screenSize={screenSize}/>
      <Testimonial screenSize={screenSize}/>
      <Gallery screenSize={screenSize}/>
      <Footer />
    </>
  );
}

export default App;
