import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
    const { expenses, Currency } = useContext(AppContext);
    const remaining = expenses.reduce((Budget, item) => {
        return (Budget -= item.allocated_budget);
    }, 0);

    return (
        <div className='alert alert-success'>
        <span>Remaining: {Currency}{remaining}</span>
        </div>
    );
};

export default RemainingBudget;