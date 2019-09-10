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


function BoardHeader() {
    return  <div>
    <NumberCommon>글번호</NumberCommon>
    <TitleCommon>글제목</TitleCommon>
    <UserIdCommon>작성자</UserIdCommon>
    <CreatedAtCommon>작성일</CreatedAtCommon> 
</div>
}

export default BoardHeader;