import React from 'react'
import {ContactSection ,Title,TitleSpan,Form,FormInput,InputText,InputSubject,TextArea,InputEmail ,InputSubmit}from './style.js'
const Contact = ()=>{
    return(
        <ContactSection >
        <div className="container">
            <Title> <TitleSpan>Drop </TitleSpan>Me A line</Title>
            <Form>
                <FormInput>
                    <InputText type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </FormInput>
                <InputSubject type="text" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
    </ContactSection >
    )
}

export default Contact