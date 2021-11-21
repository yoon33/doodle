import React, { useState } from 'react';
import styled from 'styled-components';

export function Comments(props) {

    const {onCommentSubmit} = props;

    const [text, setText] = useState("");
    

    return (
        <Root>
            <Image style={{backgroundImage: 'url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg")', backgroundSize: 'contain'}}></Image>
            <SubmitBox onSubmit = {(e) => {e.preventDefault(); onCommentSubmit(text);}}> 
                <TextInput type='text' onChange={(e) => setText(e.target.value)}/>
                <Icon image={"submitcheck.png"} onClick ={(e) => {e.preventDefault(); onCommentSubmit(text);}} />
            </SubmitBox>
        </Root>
    )

}


const Root = styled.div`
    display: flexbox;
    flex-direction: row;
    margin-top: 1rem;
    margin-left: 0.5rem;
`;


const Image = styled.div`
    border-radius: 50%;
    width: 40px;
    max-width: 40px;
    min-width: 40px;
    height: 400px;
    min-height: 40px;
    max-height: 40px;
    background-color: white;
    margin-right: 0.5rem;
`;

const SubmitBox = styled.form`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 85%;
    background-color: #F3F3F3;
    height: 40px;
    border-radius: 30px;
`;

const Icon = styled.button`
    background-image: url('${props => props.image}');
    background-size: cover;
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    margin-bottom: 0.1rem;
    align-self: center;
    border: none;
`;

const TextInput = styled.input`
    display:flex;
    align-self: center;
    justify-content: flex-start;
    border: 0;
    appearance: none;
    outline: none;
    width: 95%;
    background-color: #F3F3F3;
`;