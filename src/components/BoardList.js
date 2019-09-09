import React from 'react';
import styled, { css } from 'styled-components';

const DivCommon = styled.div`
display: inline-block;
padding: 10px 10px;
border: 1px solid black;
height 30px;
overflow: hidden;
`;

const NumberCommon = styled(DivCommon)`
width: 50px;
`;

const TitleCommon = styled(DivCommon) `
width: 400px;
`

const ContentCommon = styled(DivCommon) `
display: block;
width: 590px;

${props => props.inverted && 
    `
    display: inline-block;
`}; 

${props => !props.inverted && 
    `
    display: none;
`}; 
`

const UserIdCommon = styled(DivCommon) `
width: 70px;
`

const CreatedAtCommon = styled(DivCommon) `
width: 70px;
`


function BoardList({ id, title, content, userId, createdAt, handleClick, index, show}) {
    return <div>
        <NumberCommon>{id}</NumberCommon>
        <TitleCommon onClick={handleClick} data-div_id={index} >{title}</TitleCommon>
        <ContentCommon inverted={show}>{content}</ContentCommon>
        <UserIdCommon>{userId}</UserIdCommon>
        <CreatedAtCommon>{createdAt}</CreatedAtCommon>
    </div>
}

export default BoardList;