import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncByTen = () => {

        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };

    const handleDecByTen = () => {

        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'REC_QUANTITY',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.allocated_budget)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncByTen}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecByTen}></FaMinusCircle></td>
        <td><FaTimesCircle size='1em' color="grey" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;