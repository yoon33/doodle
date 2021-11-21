import React from 'react';
import styled from 'styled-components';

export function Banner(props) {
    return (
        <Root image={"maple.jpeg"}>
            <h1>It'ts Fall :)</h1>
            <p>COLD</p>
            <Corner>feed about </Corner>
        </Root>
    )
}


const Root = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    padding: 150px;
    text-align: center;
    color: white;
    font-size: 30px;
`;

const Corner = styled.div`
    display: flex;
    justify-content: flex-end;
    color: white;
`;