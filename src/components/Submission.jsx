import React, {useEffect, useState} from 'react';
import { useFilePicker } from 'use-file-picker';
import styled from 'styled-components';
import { Post } from './Post';
import { useSelector } from 'react-redux';

export function PreviewSubmission(props) {
    const {handleShow} = props;

    const user = useSelector(state => state.user);

    const image = user.image;

    return(
        <Root onClick={handleShow}>
            <Image style={{width: '50px', height: '50px', backgroundImage: `url("${image}")`, backgroundSize: 'cover'}}></Image>
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
           <SubmitBox>
                <Image/>   
                <TextInput placeholder="Whatchu thinking? :)" contenteditable="true" onChange = {(e) => {setPost({...post, text: e.target.value});}} />
            </SubmitBox>
            <PreviewImage>
                    { filesContent.length > 0 ? <img width="80%" height="auto" style={{margin: "0 auto"}} object-fit="fill" src={filesContent[0].content}/> : null }
            </PreviewImage>
            <Options>
                    <Option image={"file.png"} onClick={() => openFileSelector()} text="File"/>
                    <Option image={"camera.png"} text="Camera" last/>
            </Options>
            <SubmitContainer>
                <Cancel onClick={submitAction}>Cancel</Cancel>
                <Upload type="submit" onClick={(e) => { e.preventDefault(); addPost(post); submitAction(); }}>Upload</Upload>
            </SubmitContainer>
        </Root>
    )   
}

const Option = (props) => {
    const {image, text, onClick} = props;

    return(
        <OptionContainer onClick={onClick} last={props.last ?? false}>
            <Icon image={image} />
            <Text>{text}</Text>
        </OptionContainer>
    )
}

const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    border: 1px solid #d9d9d9;
    border-left-width: 1px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-right-width: ${props => props.last ? '1px' : '0px'};
    padding: 1rem;

    &:hover {
        background-color: #f3f3f3;
    }

`;

const Cancel = styled.button`
    margin-top: 1rem;
    border: 1px solid #999;
    padding: 5px;
    background-color: #fff;
    color: #646464;
    cursor: pointer;
`;

const Upload = styled.div`
    margin-top: 1rem;
    border: 1px solid #8B7DE6;
    padding: 5px;
    background-color: #8B7DE6;
    color: #fff;
    cursor: pointer;
`;

const SubmitContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
`;

const Text = styled.span`
    cursor: pointer;
`;

const Image = styled.div`
    border-radius: 50%;
    background-color: white;
    width: 100px;
    height: 100px;
    background-image: url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg");
    background-size: cover;
    display: block;
    float: left;
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
    width: 22px;
    height: 22px;
    margin-right: 0.2rem;
    // margin-bottom: 0.5rem;
    // margin-top: 2rem;
    white-space: ${props => props.post? 'normal' : 'nowrap'}
`;

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem;
`;

const SubmitBox = styled.form`
    width: 100%;
    background-color: white;
    min-height: 50px;

    :hover {
        background-color: ${props => props.isPreview ? "#929292" : "white"};
    }
`;

const Options = styled.div`
    display: flex;
    flex-direction: row;
    float: left;
    align-self: center;
`;

const TextInput = styled.textarea`
    display: inline-block;
    align-self: center;
    justify-content: flex-start;
    border: 0;
    box-shadow: white;
    appearance: none;
    width: calc(100% - 100px);
    min-height: 200px;
    height: auto;
    word-wrap: break-word;
    outline: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const InputContainer = styled.div`
`;