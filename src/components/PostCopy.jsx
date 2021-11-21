import React from 'react';
import styled from 'styled-components';

export function Post(props) {
    return (
        <Root>
            <AuthorDetails>
                <Profile style={{backgroundImage: 'url("https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg")', backgroundSize: 'contain'}}></Profile>
                <Details>
                    <DetailLog>nickname</DetailLog>
                    <DetailLog>01.01.1995</DetailLog>
                </Details>
            </AuthorDetails>
            <Postbox>
                <PostImage style={{backgroundImage: 'url("https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F765877054%2F960x0.jpg%3Ffit%3Dscale")', backgroundSize: 'cover'}}></PostImage>
                <PostWrite style ={{color: 'blue'}}>#hashtag</PostWrite>
                <PostWrite>blah blah blah I love myself.BLACK LIVES MATTER! TYRONE is my lover. All I want to...read more</PostWrite>
                <EngagementButtons>
                    <Engagement image={"Image 2.png"} text="999"/>
                    <Engagement image={"message.png"} text="999"/>
                </EngagementButtons>
            </Postbox>
        </Root>
     )
}

const Root = styled.div`
    
`;

const AuthorDetails = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

const PostImage = styled.div`
    width: 100%;
    height: 250px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
 `;   

 const PostWrite =styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
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
    display:flex;
    flex-direction: column;
`;

const Postbox = styled.div` 
    margin-top: 1rem;
    width: 50%;
    border-radius: 30px;
    background-color: white;
    height: 380px;
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


function Engagement(props) {

    const { image, text} = props;

    return(
        <EngagementRoot>
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