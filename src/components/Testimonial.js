import Emily from '../images/image-emily.jpg';
import Thomas from '../images/image-thomas.jpg';
import Jenny from '../images/image-jennie.jpg';


export default function Testimonial() {
    return (
      <>
      <h3>client testimonials</h3>
      <div className='[ grid-3 ][ pad-l ]'>
        <figure className='[ testimonial flow ]'>
          <img src={Emily} alt="Emily" />
          <figcaption>
            <p className='[ clr-neutral-medium mar-b-l ]'>We put our trust in Sunnyside and they delivered, making sure
            our needs were met and deadlines were always hit</p>
            <div className='[ mar-b-s ]'>Emily R. </div>
            <div className='[ ff-sans fs-400 clr-neutral-lighter ]'>Marketing Director</div>
          </figcaption>
        </figure>
        <figure className='[ testimonial flow ]'>
          <img src={Thomas} alt="Thomas" />
          <figcaption>
            <p className='[ clr-neutral-medium mar-b-l ]'>Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience. </p>
            <div className='[ mar-b-s ]'>Thomas S.</div>
            <div className='[ ff-sans fs-400 clr-neutral-lighter ]'>Chief Operating Officer</div>
          </figcaption>
        </figure>
        <figure className='[ testimonial flow ]'>
          <img src={Jenny} alt="Jenny" />
          <figcaption>
            <p className='[ clr-neutral-medium mar-b-l ]'>Incredible end result! Our sales increased over 400% when we
            worked with Sunnyside. Highly recommended!</p>
            <div className='[ mar-b-s ]'>Jennie F.</div>
            <div className='[ ff-sans fs-400 clr-neutral-lighter ]'>Business Owner</div>
          </figcaption>
        </figure>
      </div>  
      </>
    )
}