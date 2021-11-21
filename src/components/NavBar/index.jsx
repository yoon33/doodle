import React from 'react';
import styled from 'styled-components';
import {MenuOne} from './MenuOne'

export function Navbar(props) {
    return(
        <div>
        <Root>
            <Title>Doo<strong>dle</strong></Title>
            <Menu />
        </Root>
        <MenuOne />
        </div>
    );
}



const Root = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    color: #EF5139;
    border-bottom: 2px solid #707070;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const Title = styled.p`
    font-size: 32px;
    letter-spacing: 2.8px;
    margin: 0;
    padding: 0;
`;

const Menu = styled.div`
    background-image: url('menu.svg');
    background-size: cover;
    width: 40px;
    height: 40px;
`;