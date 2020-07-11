import React,{useState,useEffect} from 'react'
import {PortfolioSection,PortfolioTitle,PortfolioTitelSpan,PortfolioList,PortfolioItem,Wrapper,Image,Overlay,OverlaySpan} from'./style.js'

import axios from 'axios'


 const Portfolio = ()=>{

 const [images,setImages] = useState([])

 useEffect(()=>{
axios.get('js/data.json').then(response=>setImages(response.data.portfolio))
 },[])

 const portfolioiImages = images.map(imageItem =>{
     return(
        <Wrapper key={imageItem.id}>
        <Image src={imageItem.image}/>
        <Overlay>
            <OverlaySpan>
                Show Image
            </OverlaySpan>
        </Overlay>
    </Wrapper>

     )
 })
    return(
        <PortfolioSection>
        <PortfolioTitle><PortfolioTitelSpan>My</PortfolioTitelSpan> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className='box'>
            {portfolioiImages }    
        </div>
        
    </PortfolioSection>
    )
}

export default Portfolio