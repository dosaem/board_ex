import * as types from './ActionTypes'

// 액션 생성자 만들기
const contentView = (boards, total) => ({
    type: types.CONTENTVIEW,
    boards,
    total,
})