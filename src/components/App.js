import React, { Component } from 'react';
import Board from './Board'


export class App extends Component {

  render() {
    const { boards, onContentView, total } = this.props;    
      return (       
          <Board boards={boards} onContentView={onContentView} total={total} />
        
      );
  }
}

export default App;