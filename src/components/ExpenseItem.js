import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const handleIncByTen = (name) => {

        const expense = {
            name: name,
            allocated_budget: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const handleDecByTen = (name) => {

        const expense = {
            name: name,
            allocated_budget: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{parseInt(props.allocated_budget)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick= {event => handleIncByTen(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick= {event => handleDecByTen(props.name)}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.5em' color="grey" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;