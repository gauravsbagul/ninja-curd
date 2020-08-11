import React, { Component } from 'react';
import Ninjas from './Ninjas';
import  AddNinja from './AddNinja';
class App extends Component {
  state = {
    ninjas : [
      {name: 'Gaurav', age: 24, belt: 'black', id: 1},
      {name: 'Rohan', age: 25, belt: 'orange', id: 2},
      {name: 'Akshay', age: 18, belt: 'green', id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random() * 10;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas:ninjas
    })
  }

  componentDidMount(){
    console.log('componnent mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component updated')
    console.log('prevProps->',prevProps,'\nprevState->',prevState)

  }

  render() {
    return (
      <div className="App">
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
    
       <AddNinja addNinja={this.addNinja}/>
       
      </div>
    );
  }
}

export default App;
