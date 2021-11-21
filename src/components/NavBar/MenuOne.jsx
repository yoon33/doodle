import React from 'react';
import styled from 'styled-components';

export function MenuOne(props){

    return(
        <Root>
            <BoxOne>
                <Img image = {"logout.png"} />
                <p>logout</p>
            </BoxOne>
            <BoxTwo>
            <Img image = {"user.png"} />
            <p>account</p>
            </BoxTwo>
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 12%;
    margin: 0 auto;
    background-color: white;
    cursor: pointer;
    border-radius: 10%;
`;

const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 10%;

    :hover {
        background-color: #c2c2c2;
    }
`;

const BoxTwo = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 10%;

    :hover {
        background-color: #c2c2c2;
    }
`;

const Img = styled.div`
    background-image: url('${props => props.image}');
    height: 30px;
    width: 30px;
    background-size: contain;
`;