import React from 'react';
import BottlesMob from '../images/mobile/image-gallery-milkbottles.jpg';
import OrangeMob from '../images/mobile/image-gallery-orange.jpg';
import ConeMob from '../images/mobile/image-gallery-cone.jpg';
import SugarMob from '../images/mobile/image-gallery-sugar-cubes.jpg';
import BottlesDes from '../images/desktop/image-gallery-milkbottles.jpg';
import OrangeDes from '../images/desktop/image-gallery-orange.jpg';
import ConeDes from '../images/desktop/image-gallery-cone.jpg';
import SugarDes from '../images/desktop/image-gallery-sugarcubes.jpg';



export default function Gallery( { screenSize } ) {

    const breakpoint = 600;

    return (
      <>
        {screenSize.width > breakpoint ?
        <figure className='[ grid-4 ]'>
            <img src={BottlesDes} alt="White milk bottles with red cap under a light blue sky with white clouds" /> 
            <img src={OrangeDes} alt="Half an orange on a white green edged plate with a on an orange background" /> 
            <img src={ConeDes} alt="Empty ice cream cone on a light blue background" /> 
            <img src={SugarDes} alt="Stacked sugar cubes on a pink background" /> 
        </figure> :
         <figure className='[ grid-2-s ]'>   
            <img src={BottlesMob} alt="White milk bottles with red cap under a light blue sky with white clouds" />
            <img src={OrangeMob} alt="Half an orange on a white green edged plate with a on an orange background" />
            <img src={ConeMob} alt="Empty ice cream cone on a light blue background" />
            <img src={SugarMob} alt="Stacked sugar cubes on a pink background" />
          </figure>   
        }
      </>
    )
}