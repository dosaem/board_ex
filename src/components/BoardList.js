import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


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


const BoardList = ({ id, title, content, userId, createdAt, openBoard, index, show}) => {
    return <div>
        <NumberCommon>{id}</NumberCommon>
        <TitleCommon onClick={openBoard} data-div_id={index} >{title}</TitleCommon>
        <ContentCommon inverted={show}>{content}</ContentCommon>
        <UserIdCommon>{userId}</UserIdCommon>
        <CreatedAtCommon>{createdAt}</CreatedAtCommon>
    </div>
}

BoardList.propTypes = {
    openBoard: PropTypes.func,
};

BoardList.defaultProps = {
    openBoard: () => console.warn('openBoard not defined')
}

export default BoardList;