import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const now = moment();

console.log(now.format('MMM DD, YYYY'));


export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderFocused: false,
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused}));
  }
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)){
    this.setState(() => ({ amount }));

    }  else{

  }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onOptionalChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  render(){
    return(
      <div>
        <form>
            <input type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />

            <input type="text"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount"
            />

            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false }


            />

            <textarea

              value={this.state.note}
              onChange={this.onOptionalChange}
              placholder="Add a note for your expense">
            </textarea>

            <button>Add Expense</button>
          </form>
      </div>
    )
  }
}
