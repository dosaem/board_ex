// 액션 생성자 만들기
const contentView = (boards, total) => ({
    type: CONTENTVIEW,
    boards,
    total,
  })