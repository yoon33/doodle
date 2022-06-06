import React from 'react';
import styled from 'styled-components';

export function Hashtag(props) {
    return(
        <Root>
            <Title> Trending </Title>
            <Keywords>
                <ActualHashTag>#summer22</ActualHashTag>
                <ActualHashTag>#vacation</ActualHashTag>
                <ActualHashTag>#foodshortage</ActualHashTag>
            </Keywords>
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

const Title = styled.h3`
    margin: 0 auto;
    padding: 19px 0 7px 5px;
    font-size: 15px;
    line-height: 18px;
    color: #1f1d1d;
    border-bottom: 3px solid #e5e5e5;
`;

const Keywords = styled.div`
    overflow: hidden;
    height: 140px;
    margin-top: 16px;
`;

const ActualHashTag = styled.div`
    float: left;
    max-width: 156px;
    margin-bottom: 5px;
    padding: 7px 10px;
    font-weight: 700;
    font-size: 13px;
    color: #646464;
`;