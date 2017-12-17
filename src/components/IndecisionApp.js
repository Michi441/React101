
import React from 'react';
import  AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';



export default class IndecisionApp extends React.Component{

  constructor(props){
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount(){
    console.log('fetching data');

    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if(options){
    this.setState(() => ({ options }));
  }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('saving data');

    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }


  }

  handleAddOption(option){

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

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);


  }

  handleDeleteOptions() {
    this.setState(() => ({ options: []}));
  }
  handleDeleteOption(optionToRemove) {
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
    )
  }
}
IndecisionApp.defaultProps = {
  options: []
};
