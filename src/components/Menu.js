import Arrow from '../images/icon-arrow-down.svg';
import Hamburger from '../images/icon-hamburger.svg';

export default function Menu( {
    screenSize,
    menuIsActive,
    activateMenu
    }) {
    
    const breakpoint = 600
    
    return (
        <header className={screenSize.width > breakpoint ?
            '[ large-screen ][ flex-column ]' :
            '[ small-screen ][ flex-column ]'}>
            <nav className='[ flex-space-between ][ pad-m ]'>
                <div className='[ ff-sans fs-700 fw-800 letter-space-m clr-txt-white ]'>sunnyside</div>
                    {screenSize.width > breakpoint ?
                    <ul className='[ navigation ]'>
                        <li><a className="about" href="#" alt="About">About</a></li>
                        <li><a className="services" href="#" alt="Services">Services</a></li>
                        <li><a className="projects" href="#" alt="Projects">Projects</a></li>
                        <li><a className="contact" href="#" alt="Contact">Contact</a></li>
                    </ul> :
                    <div className='flex-column'>
                        <figure className='[ hamburger ]' onClick={activateMenu}>
                            <img src={Hamburger} alt="hamburger menu" />
                        </figure>
                    </div>
                    }
            </nav>

                        { menuIsActive && screenSize.width <= breakpoint && 
                        <ul className='[ dropdown flex-col-center ]'>
                            <li><a className="about" href="#" alt="About">About</a></li>
                            <li><a className="services" href="#" alt="Services">Services</a></li>
                            <li><a className="projects" href="#" alt="Projects">Projects</a></li>
                            <li><a className="contact" href="#" alt="Contact">Contact</a></li>
                        </ul> }
                    
                    
            <h1>we are creatives</h1>
            <figure className='arrow [ mar-b-4xl ]'>
                <img src={Arrow} alt="Arrow pointing down" />
            </figure>
        </header>
    )
};