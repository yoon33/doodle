import React, {useState} from 'react';
import styled from 'styled-components';
import { logout } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';

export function MenuOne(props){

    const dispatch = useDispatch();
    
    function onLogout(e) {
        dispatch(logout());
    }
    const {handleToggle} = props;

    
    return(
        <Root>
            <Box onClick={onLogout}>
                <Img image = {"logout.png"} />
                <p>logout</p>
            </Box>
            <Box onClick={handleToggle}>
                <Img image = {"user.png"} />
                <p>account</p>
            </Box>
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid grey;
    padding: 10px;
    width: auto;
    height: auto;
    margin: 0 auto;
    background-color: white;
    cursor: pointer;
    position: absolute;
    right: 10px;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    gap: 30px;

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

