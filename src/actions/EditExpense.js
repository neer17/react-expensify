//  editExpense
export default (updatedExpense) => ({
    type: 'EDIT_EXPENSE',
    id: updatedExpense.id,
    updatedExpense
});