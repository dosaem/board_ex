import React from 'react';
import PropTypes from 'prop-types';
import BoardList from './BoardList';
import axios from 'axios';
import styled, { css } from 'styled-components';
import _ from 'lodash';


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

function fetchBoards(pageNun, callback) {
    console.log(callback);
    // axios.get("http://13.124.138.86:8080/post/list/1")
    axios.get("http://localhost:8080/post/list/" + pageNun)
    .then(res => {
    const { rows: boards, count: total } = res.data.posts;
    boards.map((boards, index) => (
        boards.key = index,
        boards.show = false
    ));

    callback(boards, total);
    })
}

// componentDidMount() {
// const { onContentView } = this.props; 
// console.log(this.props);
// fetchBoards.call(this, 1, onContentView);
// }

// handlePageClick = (e) => {
// const pageNum = e.currentTarget.dataset.id;
// fetchBoards.call(this, pageNum);
// }

// handleClick = (e) => {
//     const { boards } = this.state;
//     const clickIndex = e.currentTarget.dataset.div_id;
//     const show = !boards[clickIndex].show;

//     this.setState({
//     boards: boards.map((boards, index) =>
//         index == clickIndex ? { ...boards, show } : boards
//     )
//     });
// }

function Board({ boards, onContentView, total })  {

    const pages = _.range(Math.ceil(total / 10));
    console.log(pages);
    return(
    <div>
        <div>
                <NumberCommon>글번호</NumberCommon>
                <TitleCommon>글제목</TitleCommon>
                <UserIdCommon>작성자</UserIdCommon>
                <CreatedAtCommon>작성일</CreatedAtCommon>
            </div>
        <div>
        {
        boards && boards.map(boards => (
            <BoardList 
            key={boards.key}
            index={boards.key}
            show={boards.show}
            id={boards.id}
            title={boards.title}
            content={boards.content}
            userId={boards.userId}
            createdAt={boards.createdAt}
            >
            </BoardList>
        ))}
        </div>
        <div>
        <PageUl>
            {
            pages && pages.map(
                page => (<li onClick={() => fetchBoards(page + 1, onContentView)} data-id={page + 1} >{`${page + 1}`}</li>)
            )
            }
    </PageUl>
    </div>
</div>
    );
};
Board.propTypes = {
    boards: PropTypes.array,
    onContentView: PropTypes.func};

Board.defaulProps = {
    boards: [],
    onContentView: () => console.warn('onContentView not defined')
}

export default Board;