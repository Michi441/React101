
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



class OldSyntax {
  constructor(){
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);

  }

  getGreeting(){
    return 'Hi. My Name is ' + this.name;
  }
}

const oldSyntax = new OldSyntax();
const getGreet = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(getGreet());

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return 'Hi. My Name is ' + this.name;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(getGreeting());
