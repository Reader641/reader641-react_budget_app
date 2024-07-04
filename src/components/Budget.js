import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch} = useContext(AppContext);
    
    const [budget, setBudget] = useState(0);
    const { Budget, Currency } = useContext(AppContext);

    const updateBudget = () => {
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: budget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{size: 10}}
                        onChange={event => setBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};

export default Budget;