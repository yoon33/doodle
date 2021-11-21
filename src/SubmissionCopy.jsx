import React from 'react';
import styled from 'styled-components';

export function Submission(props) {
    return (
        <Root>
            <Image style={{backgroundImage: 'url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg")', backgroundSize: 'contain'}}></Image>
            <SubmitBox>
                <Options>
                    <Icon image={"file.png"}/>
                    <Icon image={"camera.png"}/>
                    <Icon image={"submitcheck.png"}/>
                </Options>
            </SubmitBox>
        </Root>
    )   
}

const Image = styled.div`
    border-radius: 50%;
    width: 100px;
    max-width: 100px;
    min-width: 100px;
    height: 100px;
    min-height: 100px;
    max-height: 100px;
    background-color: white;
    margin-right: 2rem;
`;

const Icon = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    width: 35px;
    height: 35px;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
`;

const Root = styled.div`
    margin-top: 61px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
`;

const SubmitBox = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 80%;
    border-radius: 30px;
    background-color: white;
    height: 150px;
`;

const Options = styled.div`
    display: flex;
    flex-direction: row;
`;
