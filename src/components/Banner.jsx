import React from 'react';
import styled from 'styled-components';

export function Banner(props) {
    return (
        <Root image={"winter.jpg"}>
        </Root>
    )
}


const Root = styled.div`
    background-image: url('${props => props.image}');
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    text-align: center;
    font-size: 30px;
    width: 85%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    
`;

