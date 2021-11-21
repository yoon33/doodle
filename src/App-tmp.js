import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import styled from 'styled-components';
import { Submission } from './components/Submission';
import { Post } from './components/Post';
import { Info } from './components/Info';

function App() {
  return (
    <Root>
      <Navbar/>
      <Page>
      <Submission/>
      <Body>
        <Post/>
        <Info/>
      </Body>
      </Page>
    </Root>
  );
}

const Root = styled.div`
  background-color: #F3F3F3;
  min-height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  margin-left: calc(2rem + 100px);
  width: calc(100% - 2rem - 100px);
`;

const Page = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default App;
