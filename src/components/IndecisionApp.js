
import React from 'react';
import  AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component{

  state = {
    options: [],
    selectedOption: undefined
  };


  handleAddOption = (option) => {

    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return{
        options: prevState.options.concat(option)
      };
    });
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
}

  handleClearModal = () => {
    this.setState(() => ({ selectedOption: undefined}));
  }




  handleDeleteOptions = () =>  {
    this.setState(() => ({ options: []}));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  render(){

    // const for title, subtitle and options as an array.
    const title = 'Indecision';
    const subtitle = '';

    return(
      <div>

      <Header subtitle={subtitle}/>
      <div className="container">
            <Action hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <Options options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption={this.handleAddOption}/>
      </div>
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleClearModal={this.handleClearModal}
             />
      </div>


    )
  }
}
IndecisionApp.defaultProps = {
  options: []
};
