import styled from 'styled-components'

export const ProfileSkills = styled.div`
padding: 50px 0;
overflow: hidden;
`
// .profile_skills {
//     padding: 50px 0;
//     overflow: hidden;
// }

export const ProfileSec=styled.div`
width: 50%;
float: left;
@media (max-width:768px){
    width: 100%;
    float: none
}
`
// .profile_skills .profile {
//     width: 50%;
//     float: left;
// }

export const  Title= styled.h1`
font-size:40px;
    color:#661616;
`
// section.proski .container .profile h1{
//     font-size:40px;
//     color:#661616;
// }

export const TitleSpan= styled.span`
font-size:70px;
color:red;
font-style: italic;
`
export const  SkillsTitle= styled.h1`
font-size:40px;
    color:#661616;
`

// section.proski .container .profile h1 span{
//     font-size:70px;
//     color:red;
//     font-style: italic;
// }

export const ProfileList = styled.ul`
list-style: none
`
// .profile_skills .profile .profile-list {
//     list-style: none
// }

export const ProfileItem = styled.li`
margin-bottom: 8px
`
// .profile_skills .profile .profile-list .profile-item {
//     margin-bottom: 8px
// }

export const ProfileSpan= styled.span`
display: inline-block;
width: 100px;
font-weight: bold
`

// .profile_skills .profile .profile-list .profile-item span{
//     display: inline-block;
//     width: 100px;
//     font-weight: bold
// }

export const ProfileSpanWeb = styled.span`
font-weight: normal;
color: #eb5424
`
// .profile_skills .profile .profile-list .profile-item span.web {
//     font-weight: normal;
//     color: #eb5424
// }


export const SkillsSec=styled.div`
width: 50%;
float: left;
@media (max-width:768px){
    width: 100%;
    float: none
}
`

// .profile_skills .skills {
//     width: 50%;
//     float: left;
// }

export const SkillsParagraph= styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px
`

// .profile_skills .skills .skills-desc {
//     font-size: 15px;
//     color: #888;
//     line-height: 1.5;
//     margin-bottom: 20px
// }

export const SkillsBar = styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px
`
// .profile_skills .skills .bar {
//     overflow: hidden;
//     padding: 10px 0;
//     margin-bottom: 10px
// }

export const SpanTitle = styled.span`
float: left;
`
// .profile_skills .skills .bar .title {
//     float: left;
// }

export const SpanPercent= styled.span`
float: right;
margin-right: 100px
`
// .profile_skills .skills .bar .perc {
//     float: right;
//     margin-right: 100px
// }


export const SpanParent = styled.span`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px;
display:block
`

// .profile_skills .skills .bar .parent {
//     height: 2px;
//     clear: both;
//     background: #f8f8f8;
//     position: relative;
//     top: 5px
// }

export const RedLine = styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width:${props => props.progress === 1? "100%":"" };
width:${props => props.progress === 2? "90%":""};
width:${props => props.progress === 3? "80%":""}
`
 

// .profile_skills .skills .bar .parent span {
//     background: #eb5424;
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 0;
//     bottom: 0
// }

// .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
// }

// .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
// }

// .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
// }

// .profile_skills .profile .profile-title,
// .profile_skills .skills .skills-title{
//     font-size: 40px; 
//     margin-bottom: 20px
// }

// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }