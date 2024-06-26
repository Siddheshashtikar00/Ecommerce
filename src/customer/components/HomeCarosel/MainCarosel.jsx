import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';


const MainCarousel = () =>{

const items = mainCaroselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)


return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        className="relative z-10"
    />
 );
}
export default MainCarousel;