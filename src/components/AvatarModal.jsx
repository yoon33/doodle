import React, {useEffect, useState} from 'react';
import { useFilePicker } from 'use-file-picker';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { changeImage, changeUsername } from '../slices/userSlice';


export function AvatarModal(props) {

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
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(filesContent.length > 0) { 
            console.log(filesContent[0].content)
            dispatch(changeImage(filesContent[0].content));            
        }
    },[filesContent])

    const toggleModal = (event) => {
        setIsOpen(!isOpen);
    }

    const handleUsername = (e) => {
        console.log(`Your new username is ${username}`);
        dispatch(changeUsername(username));
        toggleModal(null);
    }

    return(
        <div>
            <Image onClick={toggleModal} style={{backgroundImage: `url(${user.image})`, width: '50px', height: '50px'}}></Image>
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
        </div>
    )
}

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