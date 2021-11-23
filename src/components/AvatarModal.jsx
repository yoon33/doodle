import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { changeImage, changeUsername } from '../slices/userSlice';


export function AvatarModal(props) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const image = user.image;

    const [username, setUsername] = useState(user.username);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(image);
    },[image])

    const handleImage = (e) => {
        //console.log('hi')
        //console.log('changing the image')
        //console.log(e.target.files[0].name);
        dispatch(changeImage(e.target.files[0].name));
    }

    const toggleModal = (event) => {
        setIsOpen(!isOpen);
    }

    const handleUsername = (e) => {
        console.log(`Your new username is ${username}`);
        dispatch(changeUsername(username));
    }

    return(
        <div>
            <Image onClick={toggleModal} style={{backgroundImage: `url(${user.image})`}}></Image>
            <StyledModal isOpen = {isOpen}  onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
                <Image style={{backgroundImage: `url(${user.image})`}}></Image>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg" onChange={handleImage}></input>
                <button type="button" onClick={handleUsername}>Submit</button>
            </StyledModal>
        </div>
    )
}


const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;
`;

const Image = styled.div`
    border-radius: 50%;
    background-color: white;
    margin-right: 1rem;
    width: 50px; 
    height: 50px;
    background-size: cover;
`;
