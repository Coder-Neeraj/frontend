import React, {useEffect} from 'react'
import MainCrousal from '../../components/homeCarausel/MainCrousal'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { MensKurta } from '../../../Data/MensKurta'
// import axios from 'axios'

const HomePage = () => {
// const MensKurta=[]
//   const fetchData=async()=>{
//     const res=await axios.get(`https://dummyjson.com/products`);
//     console.log('resss', res);
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
  

  return (
    <div>
        <MainCrousal/> 
        <div className='space-y-8 py-20 flex flex-col justify-center px-5 lg:px-10'>
     <HomeSectionCarousel data={MensKurta} sectionName={"Men's Kurta"}/>
     <HomeSectionCarousel data={MensKurta} sectionName={"Men's Shoes"}/>
     <HomeSectionCarousel data={MensKurta} sectionName={"Men's Shirt"}/>
     <HomeSectionCarousel data={MensKurta} sectionName={"Women's Saree"}/>
     <HomeSectionCarousel data={MensKurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage