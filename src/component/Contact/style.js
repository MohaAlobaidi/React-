
import styled from 'styled-components'

export const ContactSection = styled.div`
padding: 50px 0;
text-align: center
`



export const Title= styled.h2`
font-size: 60px;
margin-bottom: 30px;
color :red;
text-shadow: 3px 4px 6px black

`


//it does not work
export const TitleSpan =styled.span`
font-weight: bolder;
`


export const Form=styled.form`
width: 70%;
margin: auto;
`

export const FormInput=styled.div`
overflow: hidden
`

// just use to inherit the other like texe ,email,submit from it
export const Input = styled.input`
box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
`


export const InputText =styled(Input)`
float: left;
width: 45%;
`


export const InputEmail=styled(Input)`
float: right;
width: 45%;
`

export const InputSubject =styled(Input)`
width: 100%;
`

export const TextArea = styled.textarea`
width: 100%;
    outline: 0;
    background: #ccc
`


export const InputSubmit =styled(Input)`
width: 60%;
background: gray;
border: 1px solid #ccc;
color: #333;
cursor: pointer;
font-size:19px;
&:hover{
    background:black;
    color:white
}
`
