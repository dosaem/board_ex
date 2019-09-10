import axios from 'axios';


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
};

export default fetchBoards;