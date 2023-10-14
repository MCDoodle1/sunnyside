import EggMob from '../images/mobile/image-transform.jpg';
import CupMob from '../images/mobile/image-stand-out.jpg';
import EggDes from '../images/desktop/image-transform.jpg';
import CupDes from '../images/desktop/image-stand-out.jpg';


export default function Section( { screenSize } ) {
  
  const breakpoint = 600;

    return (
        <div className='[ grid-2 ]'>
          <figure className='[ box ]'>
            {screenSize.width > breakpoint ?
            <img src={EggDes} alt="Egg on yellow background" /> :
            <img src={EggMob} alt="Egg on yellow background" />}
          </figure>  
          <div className={screenSize.width > breakpoint ?
          '[ box flow ] [ pad-inline-l pad-block-xxl ][ order ]' :
          '[ box flow ] [ pad-inline-l pad-block-xxl ]'}>
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
              Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <div className='[ link ]'>
              <a className='[ text yellow ]' href="#">Learn More</a>
            </div>
          </div>  
          <figure className='[ box ]'>
            {screenSize.width > breakpoint ?
            <img src={CupDes} alt="Cup on orange background" /> :
            <img src={CupMob} alt="Cup on orange background" /> }
          </figure>  
          <div className='[ box flow ] [ pad-inline-l pad-block-xxl ]'>
            <h2>Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, 
              and copywriters, we’ll build and extend your brand in digital places.</p>
              <div className='[ link ]'>
              <a className='[ text orange ]' href="#">Learn More</a>
            </div>
          </div>  
          <div className={screenSize.width > breakpoint ? 
            '[ box flow ] [ clr-primary-dark pad-inline-l pad-block-xxl ][ large-screen ]' : 
            '[ box flow ] [ clr-primary-dark pad-inline-l pad-block-xxl ][ small-screen ]' } >
            <h2>Graphic design</h2>
            <p className='[ clr-primary-dark ]'>Great design makes you memorable. We deliver artwork that underscores your brand message 
              and captures potential clients’ attention.</p>
          </div>  
          <div className={screenSize.width > breakpoint ? 
            '[ box flow ] [ clr-primary-dark pad-inline-l pad-block-xxl ][ large-screen ]' :
            '[ box flow ] [ clr-primary-dark pad-inline-l pad-block-xxl ][ small-screen ]' } >
            <h2>Photography</h2>
            <p className='[ clr-primary-dark ]'>Increase your credibility by getting the most stunning, high-quality photos that improve 
              your business image.</p>
          </div>  
        </div> 
    )
}