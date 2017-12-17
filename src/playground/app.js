
// Create a class that uses React component as an extend.
class IndecisionApp extends React.Component{

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

const Header = (props) => {
  return(
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}

    </div>
  )
}

Header.defaultProps = {
  title: 'some default, this demonstrates live injection by Header.defaultProps!'
};



const Action = (props) => {
  return(

    <div>
      <button onClick={props.handlePick}
      disabled={!props.hasOptions}

      >What should i do?</button>

    </div>

  )
}

const Options = (props) => {
  return(
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) =>
        <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
         />)
      }
      <Option />
    </div>
  )
}

const Option = (props) => {
  return(
    <div>
        {props.optionText}
        <button
        onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>
      Remove
      </button>

    </div>
  )
}



class AddOption extends React.Component{
  constructor(props){
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
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




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
