import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            error: ''
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        //  !amount ensure that amount input field could be empty
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide amount and description'}))
        }else{
            this.setState(() => ({error: ''}))

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });

            console.log('Form submited');
        }
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                { this.state.error && <p>{this.state.error}</p> }
                <input 
                type='text'
                placeholder='Description'
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
                ></input>

                <input 
                type='text'
                placeholder='Amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
                ></input>

                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                id="myUniqueId"
                isOutsideRange={ () => false}
                numberOfMonths={1}
                displayFormat={() => moment().format('DD/MM/YYYY')}
                />
                <textarea
                placeholder='Enter note for the description(optional)'
                value={this.state.note}
                onChange={this.onNoteChange}
                >
                </textarea>

                <button>Add Description</button>
            </form>
        )
    }
}