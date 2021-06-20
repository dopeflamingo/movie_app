import Button from "@material-ui/core/Button";
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log('add')
    this.setState({count : this.state.count + 1}) 
  }

  minus = () => {
    console.log('minus')
    this.setState(current => ({count: current.count - 1}))
  }
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <Button onClick={this.add} variant='contained' color='primary'>Add</Button>
        <Button onClick={this.minus} variant='contained' color='secondary'>Minus</Button>
      </div>
    )
  }
}

export default App;
