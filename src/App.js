import React, { Component } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
// 액션 타입

const CONTENTVIEW = 'CONTENTVIEW';
const SELECTPAGE = 'SELECTPAGE';

// 액션 생성자 만들기

const contentView = () => ({
  type: CONTENTVIEW
})

const selectPage = () => ({
  type: SELECTPAGE
})


const initialState = {
  boards:[],
  pageNum: 1
}


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
function fetchBoards(pageNun) {
  // axios.get("http://13.124.138.86:8080/post/list/1")
  axios.get("http://localhost:8080/post/list/" + pageNun)
  .then(res => {
    const boards = res.data.posts.rows;
    boards.map((boards, index) => (
      boards.key = index,
      boards.show = false
    ));

    this.setState({ boards });
  })
}

class App extends Component {
  state = {
    boards: []
  }

  componentDidMount() {
    fetchBoards.call(this,1);
  }

  handlePageClick = (e) => {
    const pageNum = e.currentTarget.dataset.id;
    fetchBoards.call(this, pageNum);
  }

   handleClick = (e) => {
      const { boards } = this.state;
      const clickIndex = e.currentTarget.dataset.div_id;
      const show = !boards[clickIndex].show;

      this.setState({
        boards: boards.map((boards, index) =>
          index == clickIndex ? { ...boards, show } : boards
        )
      });
    }

  render() {    
    const { boards } = this.state;
    console.log(boards)
      return (
        <div>
          <div>
          <NumberCommon>글번호</NumberCommon>
          <TitleCommon>글제목</TitleCommon>
          <UserIdCommon>작성자</UserIdCommon>
          <CreatedAtCommon>작성일</CreatedAtCommon>
        </div>
        <div>
           {
            boards.map(boards => (
              <BoardList 
                key={boards.key}
                index={boards.key}
                show={boards.show}
                id={boards.id}
                title={boards.title}
                content={boards.content}
                userId={boards.userId}
                createdAt={boards.createdAt}
                handleClick={this.handleClick} >
              </BoardList>
            )
           )}
         </div>
         <div>
           <PageUl>
             <li onClick={this.handlePageClick} data-id="1">1</li>
             <li onClick={this.handlePageClick} data-id="2">2</li>
             <li onClick={this.handlePageClick} data-id="3">3</li>
            </PageUl>
          </div>
        </div>
        
       );
  }
}

function BoardList({ id, title, content, userId, createdAt, handleClick, index, show}) {
  return <div>
      <NumberCommon>{id}</NumberCommon>
      <TitleCommon onClick={handleClick} data-div_id={index} >{title}</TitleCommon>
      <ContentCommon inverted={show}>{content}</ContentCommon>
      <UserIdCommon>{userId}</UserIdCommon>
      <CreatedAtCommon>{createdAt}</CreatedAtCommon>
  </div>
}

export default App;