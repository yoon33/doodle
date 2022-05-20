import React from 'react';
import styled from 'styled-components';

export function Banner(props) {
    return (
        <Root className={props.className} image={"winter.jpg"}>
        </Root>
    )
}


const Root = styled.div`
    background-image: url('${props => props.image}');
    background-position: center;
    background-repeat: no-repeat;
    height: 342px;
    width: 100%;
    z-index: 11;
    position: relative;
    text-align: center;
    font-size: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    
`;

