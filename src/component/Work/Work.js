import React, { Component } from 'react'
import {WorkSection,WorkTitle,WorkTitleSpan,WorkPart,Icon,PartTitle,Line,PartDesc, } from'./style.js'

import axios from 'axios'
class Work extends Component{
    state={
        works:[]
    }
    componentDidMount(){
axios.get('js/data.json').then(respons => this.setState({works:respons.data.works}))
    }
    render(){
        const {works} =this.state
        const worksList = works.map(workItem =>{
            return(
                <WorkPart first={workItem.id} last={workItem.id}key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                    {workItem.body}
                    </PartDesc>
                </WorkPart>

            )
        })
        return(
            <WorkSection>
            <div className="container">
                <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
              {worksList}

            </div>
                
              
        </WorkSection>
        )
    }
}

export default Work