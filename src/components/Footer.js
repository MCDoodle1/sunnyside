import {ReactComponent as IconFacebook} from '../images/icon-facebook.svg';
import {ReactComponent as IconInstagram} from '../images/icon-instagram.svg';
import {ReactComponent as IconTwitter} from '../images/icon-twitter.svg';
import {ReactComponent as IconPinterest} from '../images/icon-pinterest.svg';


export default function Footer() {
    return (
        <div className='[ ff-sans bg-primary-lighter clr-primary-medium ]'>
          <div className='[ fs-700 fw-800 letter-space-s pad-block-xl ]'>sunnyside</div>
          <ul className='[ flex-justify-center ][ gap-m fs-500 ]'> 
            <il className='about'><a href="#"></a>About</il>
            <il className='services'><a href="#"></a>Services</il>
            <il className='projects'><a href="#"></a>Projects</il>
          </ul>
          <ul className='[ flex-justify-center ][ gap-m pad-block-3xl ]'>
            <li className='facebook'><a href="#"></a><IconFacebook fill='#2C7566'/></li>
            <li className='instagram'><a href="#"></a><IconInstagram fill='#2C7566'/></li>
            <li className='twitter'><a href="#"></a><IconTwitter fill='#2C7566' /></li>
            <li className='pinterest'><a href="#"></a><IconPinterest fill='#2C7566' /></li>
          </ul>
        </div> 
    )
}