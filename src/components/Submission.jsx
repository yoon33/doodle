import React, {useEffect, useState} from 'react';
import { useFilePicker } from 'use-file-picker';
import styled from 'styled-components';
import { Post } from './Post';

export function PreviewSubmission(props) {
    const {handleShow} = props;

    return(
        <Root onClick={handleShow}>
            <Image style={{width: '50px', height: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg")', backgroundSize: 'cover'}}></Image>
            <SubmitBox isPreview={true} onSubmit = {(e) => { e.preventDefault(); } }>
                Please make a comment. :)
            </SubmitBox>
        </Root>
    );
};

export function Submission(props) {

    const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        limitFilesConfig: { max: 1 },
      });

    useEffect(() => {
        if(filesContent[0]) {
            setPost({...post, image: `url(${filesContent[0].content})`});
        }
    }, [filesContent]);

    const {addPost, submitAction} = props;
    const[post, setPost] = useState({text: "", image: ""});

    return (
        <Root>
            <Image style={{width: '100px', height: '100px', backgroundImage: 'url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg")', backgroundSize: 'cover'}}></Image>
            <SubmitBox>
                <TextInput type='text' onChange = {(e) => {setPost({...post, text: e.target.value});}} />
                <PreviewImage>
                    { filesContent.length > 0 ? <img width="80%" height="auto" style={{margin: "0 auto"}} object-fit="fill" src={filesContent[0].content}/> : null }
                </PreviewImage>
                <Options>
                    <Icon image={"file.png"} onClick={() => openFileSelector()}/>
                    <Icon image={"camera.png"}/>
                    <Icon type="submit" image={"submitcheck.png"} onClick={(e) => { e.preventDefault(); addPost(post); submitAction(); }}/>
                </Options>
            </SubmitBox>
        </Root>
    )   
}

const Image = styled.div`
    border-radius: 50%;
    background-color: white;
    margin-right: 1rem;
`;

const PreviewImage = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Icon = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    border: none;
    background-color: inherit;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    white-space: ${props => props.post? 'normal' : 'nowrap'}
`;

const Root = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-self: center;
    align-items: center;
    padding-bottom: 1rem;
`;

const SubmitBox = styled.form`
    display: flex;
    align-items: ${props => props.isPreview ? "flex-middle" : "flex-end"};
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    height: 50px;

    :hover {
        background-color: ${props => props.isPreview ? "#929292" : "white"};
    }
`;

const Options = styled.div`
    display: flex;
    flex-direction: row;
`;

const TextInput = styled.input`
    display:flex;
    align-self: center;
    justify-content: flex-start;
    border: 0;
    box-shadow: white;
    appearance: none;
    outline: none;
    width: 100%;
`;