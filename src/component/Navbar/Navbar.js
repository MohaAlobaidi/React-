import React from 'react'
//import {Link} from 'react-router-dom'
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,StyleLink} from './style.js'

const Navbar = ()=>{
    return(
        <NavbarSection>
            
        <div className="container">
            
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
           
            <UlList>
                <ListItem><StyleLink exact to='/'>Home</StyleLink></ListItem>
                <ListItem><StyleLink to='/work'>Work</StyleLink></ListItem>
                <ListItem><StyleLink to='/portfolio'>Portfolio</StyleLink></ListItem>
                <ListItem><StyleLink to='/profile'>Profile</StyleLink></ListItem>
                <ListItem><StyleLink to='/about'>About</StyleLink></ListItem>
              
                <ListItem><StyleLink to='/contact'>Contact</StyleLink></ListItem>
            </UlList>
            
        </div>
        
      </NavbarSection>
    )
}

export default Navbar



{/* <div>
<Link exact to='/'>Home</Link>
<Link to='/contact'>Contact</Link>

</div> */}