import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import BoardList from './BoardList'
import fetchBoards from '../utils/FetchBoards'


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

const PageUl = styled.ul`
display: inline-block;
list-style-type: none;
`

class Board extends Component {
    render() {
    
    const {  boards, onContentView, total  } = this.props;
    const pages = _.range(Math.ceil(total / 10));

    boards.length == 0 && fetchBoards.call(this, 1, onContentView);


    console.log(pages);
    
    const boardList = boards && boards.map(boards => (
            <BoardList 
            key={boards.id}
            id={boards.id}
            title={boards.title}
            content={boards.content}
            userId={boards.userId}
            createdAt={boards.createdAt}
            >
            </BoardList>
        ))
    return(
    <div>
        <div>{boardList}</div>
        <PageUl>
            {
            pages && pages.map(
                page => (<li onClick={() => fetchBoards(page + 1, onContentView)} data-id={page + 1} >{`${page + 1}`}</li>)
            )
            }
        </PageUl>
    </div>
    );
};}


Board.propTypes = {
    boards: PropTypes.array,
    onContentView: PropTypes.func
};

Board.defaulProps = {
    boards: [],
    onContentView: () => console.warn('onContentView not defined')
}

export default Board;