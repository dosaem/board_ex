import Board from '../components/Board';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    boards: state.boards,
    pageNum: state.pageNum,
    total: state.total,
})

const mapDispatchToProps = (dispatch) => ({
    onContentView: (boards, total) => dispatch(actions.contentView(boards, total))
})


const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;