import React,{useState,useEffect} from 'react'
import {ProfileSkills,ProfileSec,Title,TitleSpan,ProfileList,ProfileItem,ProfileSpan,ProfileSpanWeb,SkillsSec,SkillsParagraph,SkillsBar, SkillsTitle,SpanTitle,SpanParent,SpanPercent,RedLine} from'./style.js'
import axios from 'axios'
const Profilie = ()=>{
    const [infos,setInfos]  = useState([])

    
useEffect(()=>{
axios.get('js/data.json').then(res =>setInfos(res.data.profile))
},[])

const infoList = infos.map(info =>{
    return(
        <SkillsBar key={info.id}>
        <SpanTitle>{info.title}</SpanTitle>
    <SpanPercent> {info.percent}</SpanPercent>
        <SpanParent>
            <RedLine progress={info.id}></RedLine>
             {/* i cant fix progress red line i send it props to css.js from json file but stil does not working*/}
        </SpanParent>
    </SkillsBar>
    )
})

    return(
        <ProfileSkills>
        <div className="container">
            <ProfileSec>
                <Title><TitleSpan>My </TitleSpan>Profile</Title>
                <ProfileList>
                    <ProfileItem>
                        <ProfileSpan>Name</ProfileSpan>
                        Mohammed Alobaidi
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Birthday</ProfileSpan>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Address</ProfileSpan>
                        Den Haag
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Phone</ProfileSpan>
                        0683334212121
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Email</ProfileSpan>
                        mohammed@Alobaidi.com
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Website</ProfileSpan>
                        <ProfileSpanWeb>www.google.com</ProfileSpanWeb>
                    </ProfileItem>
                </ProfileList>
            </ProfileSec>
            
            <SkillsSec>
                < SkillsTitle>Some skills </ SkillsTitle>
                <SkillsParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsParagraph>
              
                {infoList}
              
            </SkillsSec>
            
        </div>
    </ProfileSkills>
    )
}

export default Profilie