import React from 'react';
import styled from 'styled-components';

export function Info(props) {

    const { titleOne, titleTwo, iconOne, iconTwo, valueOne, valueTwo } = props;
    return (
        <Root>
            <Information>
                <Detail> Info </Detail>
                <Follower>
                    <Pic image={iconOne} />
                    <Script>
                        <div>{titleOne}</div>
                        <div>{valueOne}</div>
                    </Script>
                </Follower>
                <Follower>
                    <Pic image = {iconTwo} />
                    <Script>
                        <div>{titleTwo}</div>
                        <div>{valueTwo}</div>
                    </Script>
                </Follower>
            </Information>
        </Root>
    )
}


const Root = styled.div`
    margin: 0 auto;
    min-width: 12rem;
    display: flex;
    align-self: center;
`;

const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: flex-start;
    background-color: white;
    align-self: center;
    gap: 15px;
 `;   

 const Detail = styled.div`
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 15%;
    font-size: 20px;
    border-bottom: 2px solid #d2d2d2;
 `;

 const Follower = styled.div`
    margin-top: 8%;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Pic = styled.div`
    background-image: url('${props => props.image}');
    background-size: contain;
    width: 30px;
    height: 30px;
    display: flex;
    align-self: center;
`;

const Script = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #1f1d1d;
`;

// const Story = styled.div`
//     margin-top: 8%;
//     margin-left: 20%;
//     margin-right: 15%;
//     color: #1f1d1d;
//     border-bottom: 2px solid #d2d2d2;
//     padding-bottom: 10px;
//     display: flex;
//     flex-direction: row;
// `;