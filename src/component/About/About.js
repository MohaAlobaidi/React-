import React from 'react'
import {Creative,CreativeInfo,CreativeTitle,TitleSpsn,InfoDirc,InfoDescription,Anchor} from'./style.js'
const About = ()=>{
    return(
        <Creative>
            <div className="container">
                <CreativeInfo>
                    <CreativeTitle><TitleSpsn>This is</TitleSpsn> Me</CreativeTitle>
                    <InfoDirc>Creative Director</InfoDirc>
                    <InfoDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDescription>
                    <InfoDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDescription>
                </CreativeInfo>
            </div>
        </Creative>
    )
}

export default About