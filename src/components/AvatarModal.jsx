import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const someMagicFunctionThatGetsUserData = () => {
    return {
        image: 'https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg',
        username: 'daisy19',
        first: 'Daisy',
        last: 'Doug'
    }
}

export function AvatarModal(props) {

    const [user, setUser] = useState(someMagicFunctionThatGetsUserData());
    const [isOpen, setIsOpen] = useState(false);

    const changeImage = (e) => {
        console.log(e.target.files);
        setUser({...user, image: e.target.files[0].name})
    }

    const toggleModal = (event) => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <Image onClick={toggleModal} style={{backgroundImage: `url(${user.image})`}}></Image>
            <StyledModal isOpen = {isOpen}  onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
                <Image style={{backgroundImage: `url(${user.image})`}}></Image>
                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg" onChange={changeImage}></input>
            </StyledModal>
        </div>
    )
}


const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
