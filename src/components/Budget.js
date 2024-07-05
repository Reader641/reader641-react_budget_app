import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { dispatch, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (val) => {
        setNewBudget(val)
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });

    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}<input type='number' id='budget' step="10" value={newBudget} onChange={ (event) => handleBudgetChange(event.target.value) }></input></span> 
        </div>
    );
};

export default Budget;