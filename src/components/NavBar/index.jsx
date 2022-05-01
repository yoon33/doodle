import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {MenuOne} from './MenuOne';
import Modal from 'styled-react-modal';
import { useFilePicker } from 'use-file-picker';
import { useSelector, useDispatch } from 'react-redux';
import { changeImage, changeUsername } from '../../slices/userSlice';

export function Navbar(props) {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (event) => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        multiple: false,
        accept: 'image/*',
        readAs: 'DataURL'
    });

    useEffect(() => {
        console.log(openFileSelector)
    },[])

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const image = user.image;

    const [username, setUsername] = useState(user.username);

    useEffect(() => {
        if(filesContent.length > 0) { 
            console.log(filesContent[0].content)
            dispatch(changeImage(filesContent[0].content));            
        }
    },[filesContent])

    const handleUsername = (e) => {
        console.log(`Your new username is ${username}`);
        dispatch(changeUsername(username));
        toggleModal(null);
    }


    return(
        <div>
        <Root>
            <Title>Doo<strong>dle</strong></Title>
            <Menu onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} onClick={toggleOpen}>
                { open ? <MenuOne handleToggle={toggleModal}/> : null }
                {/* <MenuOne/> */}
            </Menu>
            <StyledModal isOpen = {isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
                    <LeftModal>
                    <ImageModal style={{backgroundImage: `url(${user.image})`}}></ImageModal>
                    <EditButton onClick={() => openFileSelector()}>Edit</EditButton>
                </LeftModal>
                <div style={{width: '70%', display: 'flex',  flexDirection: 'column', margin: '0 auto', rowGap: '0.5rem', 
                    alignSelf:'flex-start'}}>
                    <NameInput type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <h5>Seattle, WA</h5>
                    <h6>PhD NEETology</h6>
                    <h6>University of Pawbark</h6>
                    <Button type="button" onClick={handleUsername}>Submit</Button>
                </div>
            </StyledModal>
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


const StyledModal = Modal.styled`
  width: 27rem;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: white;
  font-size: 15px;
  row-gap: 20px;
  border: 1px solid #707070;
`;

const File = styled.input`
   display: flex;
   justify-content: flex-start;
   width: 50%; 
   margin: 0 auto;
`;

const Image = styled.div`
    border-radius: 50%;
    background-color: white;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 80%; 
    height: 50%;
    background-size: cover;
`;

const ImageModal = styled(Image)`
    align-self: flex-start;
    margin-top: 1.5rem;
`;

const NameInput = styled.input`
    border: none;
    border-radius: 5%;
    outline: none;
    font-weight: bold;
    font-size: 30px;
`;

const Button = styled.button`
    border: none;
    border-radius: 5%;
    margin-right: 3rem;
`;

const LeftModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
`;

const EditButton = styled.button`
    border: none;
    width: 50%;
    margin-top: 2.3rem;
    margin-left: 30%;
`;
