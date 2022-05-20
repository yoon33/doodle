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
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findByLabelText } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import Login from './components/Login/Login';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {

  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([{text: lorem, image: 'url(https://images.ctfassets.net/nx3pzsky0bc9/1iEFl85iyJNpOsyf7cuOso/490ade4e955f040f45b01f3105fe434a/golden2.jpg?w=1200&h=627&fit=fill&f=faces&fm=webp)'}, {text: "Peanutbutter jelly time"}, {text: "Hello world"}]);


  const state = useSelector(state => state.user);
  const isLoggedIn = state.isLoggedIn;

  useEffect(() => {
    console.log(isLoggedIn)
  },[isLoggedIn])

  return (
    <ModalProvider>
    <Root>
      <Navbar/>
      <NarrowBanner/>
      {isLoggedIn ? 
      <Page>
        <PostsContainer>
          <PreviewSubmission handleShow={handleShow}/>
          <Modal show={modalVisible}>
            <Modal.Title>
              <div style={{display: 'flex', width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p>Write a Post</p>
                <button onClick={handleClose} style={{width: '35px', height: '35px'}}>X</button>
              </div>
            </Modal.Title>
            <Modal.Body>
              <Submission addPost={(postContent) => setPosts([postContent, ...posts])} submitAction={handleClose}/>
            </Modal.Body>
          </Modal>
          <Posts>
            { posts.map(post => <Post text={post.text} image={post.image}/>)}
          </Posts>
        </PostsContainer>
        <Infos>
          <Info titleOne="followers" iconOne={"followers.png"} titleTwo="story" iconTwo = "writing.png" valueOne="999,9999" valueTwo = "999"/>
          <Info titleOne="birthday" iconOne="birthday.png" dob="05/18/1994" titleTwo="#hashtag" iconTwo="trending.png" valueTwo="#summer23"/>
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
  background-color: #F3F3F3;
  scrollbar-width: none;
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

export default App;
