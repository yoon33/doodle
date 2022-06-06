import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {useSelector} from "react-redux";
import './App.css';
import { Navbar } from './components/NavBar';
import styled from 'styled-components';
import { Submission, PreviewSubmission } from './components/Submission';
import { Post } from './components/Post';
import { Info } from './components/Info';
import { Banner } from './components/Banner';
import { Comments } from './components/Comments';
// import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findByLabelText } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import Login from './components/Login/Login';
import { Hashtag } from './components/Hashtag';
import Modal from 'react-modal';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {

  const handleClose = () => setModalVisible(false);
  const handleShow = () => {
    console.log("showing")
    setModalVisible(true);
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([{text: lorem, image: 'url(https://images.ctfassets.net/nx3pzsky0bc9/1iEFl85iyJNpOsyf7cuOso/490ade4e955f040f45b01f3105fe434a/golden2.jpg?w=1200&h=627&fit=fill&f=faces&fm=webp)'}, {text: "Peanutbutter jelly time"}, {text: "Hello world"}]);


  const state = useSelector(state => state.user);
  const isLoggedIn = state.isLoggedIn;

  useEffect(() => {
    console.log(isLoggedIn)
  },[isLoggedIn])

  return (
    <ModalProvider isModalOpen={modalVisible}>
    <Root>
      <Navbar/>
      <NarrowBanner/>
      {isLoggedIn ? 
      <Page>
        <PostsContainer>
          <PreviewSubmission handleShow={handleShow}/>
          <CustomModal 
            isOpen={modalVisible}
            onAfterOpen={handleShow}
            onRequestClose={handleClose}
            contentLabel="Write a Post"
            style={{overlay: {backgroundColor: 'rgba(51, 51, 51, 0.5)'}}}>
              <Submission addPost={(postContent) => setPosts([postContent, ...posts])} submitAction={handleClose}/>
          </CustomModal>
          <Posts>
            { posts.map(post => <Post text={post.text} image={post.image}/>)}
          </Posts>
        </PostsContainer>
        <Infos>
          <Info titleOne="followers" iconOne={"followers.png"} titleTwo="story" iconTwo = "writing.png" valueOne="999,9999" valueTwo = "999"/>
          <Hashtag />
        </Infos>
      </Page> : <Login/> }  
    </Root>
    </ModalProvider>
  );
}

const PostsContainer = styled.div`
  height: fit-content;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NarrowBanner = styled(Banner)`
  width: 70%;
  margin: 0 auto;
`

const Posts = styled.ul`
  display: block;
  overflow: visible;
  list-style-type: none;
  gap: 50px;
  padding: 0;
`;

const Root = styled.div`
  scrollbar-width: none;
  background-color: #F3F3F3;
`;

const Page = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 2rem;
  gap: 10px;
`;

const Infos = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  align-self: start;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  color: green;
`;

const CustomModal = styled(Modal)`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 40%;
  min-height: 30%;
  height: fit-content;
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  background-color: ${props => !props.isModalOpen ? "white" : "#333"};
`

// const ModalContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `

export default App;
