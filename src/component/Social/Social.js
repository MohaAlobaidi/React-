
import React, { Component } from 'react'
import {SocialMedia,SocialPart,Icon,Description,Span,SpanInfo} from './style.js'
import axios from 'axios'
class SocialM extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             socials:[]
        }
    }

    componentDidMount(){
      axios.get('js/data.json').then(respons =>this.setState({socials:respons.data.social}))
    }
    
    render() {
        const {socials} = this.state
        const socialList =socials.map(socialItem =>{
            return(
             
            
                <SocialPart item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <Description>
                        <Span>{socialItem.title}</Span>
                        <SpanInfo> {socialItem.body}</SpanInfo>
                    </Description>
               </SocialPart>
        
         
            )
        })
        return ( 

            <SocialMedia>
               {socialList}
           </SocialMedia>
        )
    }
}

export default SocialM





