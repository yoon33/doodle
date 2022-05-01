import React, {useState} from 'react';
import { Comments } from './Comments';
import styled from 'styled-components'
import { AvatarModal } from './AvatarModal';
import { useSelector } from 'react-redux';

export function Post(props) {

    const { text } = props;

    const user = useSelector(state => state.user);
    const username = user.username;

    const image = props.image ?? 'url("https://images.ctfassets.net/nx3pzsky0bc9/1iEFl85iyJNpOsyf7cuOso/490ade4e955f040f45b01f3105fe434a/golden2.jpg?w=1200&h=627&fit=fill&f=faces&fm=webp")';

    const [expand, setExpand] = useState(false);
    const heartCount = 999;
    const [like, setLike] = useState(false);
    const [expandComments, setExpandComments] = useState(false);
    const [comments, setComments] = useState([]);

    return (
        <Root>
            <AuthorDetails>
                <AvatarModal/>
                <Details>
                    <DetailLog>{username}</DetailLog>
                    <DetailLog>01.01.1995</DetailLog>
                </Details>
            </AuthorDetails>
            <Postbox>
                <PostImage style={{backgroundImage: image, backgroundSize: 'cover'}}></PostImage>
                <PostWrite style ={{color: 'blue'}}>#hashtag</PostWrite>
                <PostWrite>
                    <PostContent expand={expand}>{text}</PostContent>
                    <ReadMore onClick={(e) => { setExpand(!expand);}}>read more</ReadMore>
                </PostWrite>
                <EngagementButtons>
                    <Engagement image={"Image 2.png"} action={(e) => { setLike(!like);}} text={like ? heartCount + 1 : heartCount}/>
                    <Engagement image={"message.png"} text="999" action={(e) => {setExpandComments(!expandComments);}}/>
                </EngagementButtons>
                <CommentContent expandComments={expandComments} >
                    <Comments onCommentSubmit={(comment) => setComments([comment, ...comments])}/>
                    {comments.map(comment => <Reply image={'https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg'} text={comment}/>)}
                </CommentContent>
            </Postbox>
        </Root>
     )
}

const Root = styled.div`
    display: flex;
    padding-top: 3%;
    padding-bottom: 3%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: white;
    margin-bottom: 20px;
`;

const AuthorDetails = styled.div`
    display:flex;
    grid-row-start: row2;
    grid-row-end: span 1;
    grid-column-start: column1-start;
    grid-column-end: span 1;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

const PostImage = styled.div`
    width: 100%;
    height: 500px;
 `;   

 const PostWrite =styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
`;

const PostContent = styled.span`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
    white-space: ${props => props.expand ? 'normal' : 'nowrap'};
`;

const CommentContent = styled.div`
    height: ${props => props.expandComments ? 'auto' : '0px'} !important;
    overflow: hidden;
`;

 const DetailLog = styled.div`
    margine: 0;
    padding: 0;
`;

const Profile = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: yellow;
`;

const Details = styled.div`
    margin-left: 10px;
    display:flex;
    flex-direction: column;

`;

const Postbox = styled.div` 
    margin-top: 1rem;
    width: 100%;
    border-radius: 30px;
    background-color: white;
    height: auto;
`;

const EngagementButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

const Click = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    margin-right: 0.5rem;
`;

const ReadMore = styled.div`
    color: red;
    font-size: 15px;
    cursor: pointer;
`;

const ReplyRoot = styled.div`
    display: flex;
    flex-direction: flex-start;
    margin-left: 10%;
    line-height: 200%;
    margin-top: 1%;
`;

const Text = styled.div`
    display: flex;
    align-self: center;
    margin-left: 1%;
    background-color: #F3F3F3;
    height: 30px;
    border-radius: 10px;
    padding-left: .7rem;
    padding-right: .7rem;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
`;

function Reply(props) {
    
    const { image, text } = props;

    return(
        <ReplyRoot>
            <Circle style={{backgroundImage: 'url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg")', backgroundSize: 'contain'}}/>
            <Text>{ text }</Text>
        </ReplyRoot>
    )
}

function Engagement(props) {

    const { image, text, action} = props;

    return(
        <EngagementRoot onClick={action}>
            <Click image={image}/>
            <EngagementText>{text}</EngagementText>
        </EngagementRoot>
    )
}

const EngagementRoot = styled.div`
    display: flex;
    flex-direcion: row;
    align-items: center;
`;

const EngagementText = styled.p`
    margin: 0 auto;
    padding: 0;
`;