import React from 'react';
import styled from 'styled-components';

export function Info(props) {

    const { titleOne, titleTwo, iconOne, iconTwo, valueOne, valueTwo } = props;
    return (
        <Root>
            <Detail> Info </Detail>
                <ListInfo>
                    <SubInfo>
                        <Pic image={iconOne} />
                        <Script>
                            <div>{titleOne}</div>
                            <div>{valueOne}</div>
                        </Script>
                    </SubInfo>
                    <SubInfo>
                        <Pic image = {iconTwo} />
                        <Script>
                            <div>{titleTwo}</div>
                            <div>{valueTwo}</div>
                        </Script>
                    </SubInfo>
            </ListInfo>
        </Root>
    )
}


const Root = styled.div`
    margin: 0 auto;
    position: relative;
    width: 182px;
    height: 212px;
    padding: 0 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d2d2d2;
    background-color: #fff;
`;

 const Detail = styled.div`
    margin: 0 auto;
    padding: 19px 0 7px 5px;
    font-size: 15px;
    font-weight: 450;
    line-height: 18px;
    color: #1f1d1d;
    border-bottom: 3px solid #e5e5e5;
 `;

 const ListInfo = styled.div`
    position: relative;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
 `;

 const SubInfo = styled.div`
    gap: 20px;
    font-weight: 700;
    font-size: 13px;
    color: #1f1d1d;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 10px;
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