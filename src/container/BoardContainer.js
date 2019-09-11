import Board from '../components/Board';
import * as actions from '../actions';
import { connect } from 'react-redux';


// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    boards: state.boards,
    pageNum: state.pageNum,
    total: state.total,
    clickIndex: state.clickIndex
})

/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => ({
    onContentView: (boards, total) => dispatch(actions.contentView(boards, total)),
    openBoard: (boards, clickIndex) => dispatch(actions.openBoard(boards))
})

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;