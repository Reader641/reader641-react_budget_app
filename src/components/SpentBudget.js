import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpentBudget = () => {
    const { totalExpenses, Currency } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
        <span>Spent so far: {Currency}{totalExpenses}</span>
        </div>
    );
};

export default SpentBudget;