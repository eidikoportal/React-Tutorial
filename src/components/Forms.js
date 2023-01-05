/*
If you’re looking for a complete solution including validation, 
keeping track of the visited fields, and handling form submission, 
Formik is one of the popular choices

controlled form component example in react
*/
import React from 'react'
import { Title } from './Title';

class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2,
        textValue: 'Please write an essay about your favorite DOM element.',
        dropdown: 'coconut'
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
   
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
        <Title title="forms example"/>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Description:
            <textarea name="textValue" value={this.state.textValue} onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
          Pick your favorite flavor:
          <select value={this.state.dropdown} name="dropdown" onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        </form>
      );
    }
  }
export default Forms