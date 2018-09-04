import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import setTextFilter from './../filters/SetTextFilter';
import sortByDate from './../filters/SortByDate';
import setStartDate from './../filters/SetStartDate';
import setEndDate from './../filters/SetEndDate';
import SortByAmount from './../filters/SortByAmount';
import sortByAmount from './../filters/SortByAmount';

class ExpenseFiltersList extends React.Component{
    state = {
        calendarFocused:null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    render(){
        return (
            <div>
                <input value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />

                <select value={this.props.filters.sortBy} onChange={(e) => {
                    const value = e.target.value;

                    if (value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapToTheState = (state) => {
    return {
        filters: state.filters
    }
}
    
export default connect(mapToTheState)(ExpenseFiltersList);