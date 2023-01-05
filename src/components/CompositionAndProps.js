
/*
React has a powerful composition model, 
and we recommend using composition instead of inheritance to reuse code between components

We recommend that such components use the special children prop to pass 
children elements directly into their output

At Facebook, we use React in thousands of components, 
and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
*/
import React, { Component } from 'react';
import { Dialog } from './Functions';
class CompositionAndProps extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
      }
    
      render() {
        return (
          <Dialog title="Mars Exploration Program"
                  message="How should we refer to you?">
            <input value={this.state.login}
                   onChange={this.handleChange} />
            <button onClick={this.handleSignUp}>
              Sign Me Up!
            </button>
          </Dialog>
        );
      }
    
      handleChange(e) {
        this.setState({login: e.target.value});
      }
    
      handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
      }
}

export default CompositionAndProps;