
//Visibility Toggle

let visibility;
class VisibilityApp extends React.Component{
  constructor(props){
    super(props);
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
    this.state = {
      visibility: false
    };
  }
  toggleVisiblity() {
    //alert('working');
    this.setState((prevState) => {
      return{
        visibility: !prevState.visibility
      };
    });
  }

  render(){
    return(
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.toggleVisiblity}>
        {this.state.visibility ? 'Hide Details' : 'Show Details'}
      </button>

        {this.state.visibility && (
          <div>
            <p>Hey. These are some hidden details</p>
          </div>
        )}



      </div>
    )
  }


}

  ReactDOM.render(<VisibilityApp />, document.getElementById('app'));



// let visibility = false;
//
// const toggleVisiblity = () => {
//   visibility = !visibility;
//   console.log('toggle visibility clicked!');
//   render();
// }
//
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisiblity}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility &&
//         <div>
//           <p>Hey. These are some details that were hidden!</p>
//         </div>
//       }
//     </div>
//   );
//
//   ReactDOM.render(<VisibilityApp />, document.getElementById('app'));
// }
//
// render();
