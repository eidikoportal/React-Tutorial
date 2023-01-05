/*
1.binding event using public class field syntax or constructor bind
ex:handleClick = () => {
    console.log('this is:', this);
  };
  and call like <button onClick={this.handleClick}>
  or
  constructor(props) {
    this.handleClick = this.handleClick.bind(this);
  }
2.arrow function in callback is not recommended ex:<button onClick={() => this.handleClick()}>
due to extra re rendering

passing arg in event
..................
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

In both cases, the e argument representing the React event will be passed as a second argument
 after the ID. With an arrow function, we have to pass it explicitly, but with bind any further 
 arguments are automatically forwarded.
*/

import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick=() =>{
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  export default Toggle;