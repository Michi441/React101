
import React from 'react';

export default class AddOption extends React.Component{
  state = {
    error: undefined
  };
  constructor(props){
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

  }

  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {error};
    });

    if(!error){
      e.target.elements.option.value = "";
    }

  }

  render(){
    return(
      <div>
          {this.state.error && <p>{this.state.error}</p>}
          AddOptions component here.
          <form onSubmit={this.handleAddOption}>
            <input text="text" name="option" />
            <button>Submit</button>
          </form>
      </div>
    )
  }
}
