import React  from 'react' 
import { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data,sectionName}) => {
 const carouselRef = useRef(null);
  
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    //handler for navigation buttons
  const slidePrev=()=>{
if(carouselRef.current){
    carouselRef.current.slidePrev(); //Moves to previous slide
}
};
const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Moves to next slide
    }
  };


   
    // const items = MensKurta.slice(0,10).map((_, index) => <HomeSectionCard key={index} product={item} />);
    const items = (data?.length ? data.slice(0, 10) : []).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
      ));

    return (
        <div className='relative px-5 lg:px-8'> 
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 '>
                <AliceCarousel
                   ref={carouselRef} //assigning ref to control the carousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                     
                    disableDotsControls 
                    // onSlideChange={syncActiveIndex}
                    // activeIndex={activeIndex}
                     
                    
                /> 
                 <button   
                 onClick={slideNext}
                 variant="contained" 
                    //   className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md z-50"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-50 transition hover:scale-110"

                     > 
                    
                 <KeyboardArrowLeftIcon style={{transform:"rotate(180deg)", color:"black"}}/> 
                </button>
                <button onClick={slidePrev}  
                variant="contained"  
                //  className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md z-50"
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-50 transition hover:scale-110"

                 >  
               
                     <KeyboardArrowLeftIcon style={{color:"black"}} /> 
                </button>
            </div>

        </div>
    )
}

export default HomeSectionCarousel