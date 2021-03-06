import * as types from './ActionTypes'

// 액션 생성자 만들기
export const contentView = (boards, total) => ({
    type: types.CONTENTVIEW,
    boards,
    total,
});

export const openBoard = (boards, clickIndex, checkShow ) => ({
    type: types.OPENBOARD,
    boards,
    clickIndex,
    checkShow
});