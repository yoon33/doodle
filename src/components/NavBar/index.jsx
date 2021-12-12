import React, { useState } from 'react';
import styled from 'styled-components';
import {MenuOne} from './MenuOne'

export function Navbar(props) {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);

    return(
        <div>
        <Root>
            <Title>Doo<strong>dle</strong></Title>
            <Menu onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} onClick={toggleOpen}>
                { open ? <MenuOne/> : null }
                {/* <MenuOne/> */}
            </Menu>
        </Root>

        {/* <MenuOne /> */}
        </div>
    );
}

const Block = styled.div`
    width: 10rem;
    height: 30rem;
    background-color: green;
    display: block;
    position: absolute;
    top: 0;
    right: 0;

`;



const Root = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-bottom: 2px solid #707070;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 50px;
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
    max-width: 40px;
    height: 40px;
`;