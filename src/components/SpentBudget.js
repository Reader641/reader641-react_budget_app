import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpentBudget = () => {
    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.allocated_budget);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default SpentBudget;