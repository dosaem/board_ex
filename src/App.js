import React, { Component } from 'react';
import Board from '../components/Board';
import BoardHeader from '../components/BoardHeader';
import BoardContainer from './BoardContainer';


class App extends Component {

  render() {
      return (      
        <div>
          <BoardHeader />
          <BoardContainer/>
        </div> 
      );
  }
}

export default App;