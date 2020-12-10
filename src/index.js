import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }
  incrementor(){
    const newValue = this.state.value + 1;
    this.setState({
      value: newValue,
    });
  }
  render(){
    return(
      <div>
        <div>{this.state.value}</div>
        <button onClick={() => this.incrementor()}>Increment</button>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
