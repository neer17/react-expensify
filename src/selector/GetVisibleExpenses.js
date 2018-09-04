import moment from 'moment';

//  getVisibleExpenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = startDate ? moment().isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? moment().isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        //  the sorting is happening in decreasing order
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};