import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const incrementBudget = () => {
        dispatch({ type: 'SET_BUDGET', payload: budget + 10 });
    };

    const decrementBudget = () => {
        if (budget >= 10) {
        dispatch({ type: 'SET_BUDGET', payload: budget - 10 });
        } else {
        alert("Budget can't be negative!");
        }
    };
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const checkBudget = () => {
        if (budget < totalExpenses) {
            alert("Your budget is lower than your total expenses!");
        }
    };
    
    return (
        <div className='alert alert-secondary'>
    <span>
        <span>Budget: £{budget}</span>
        {/*
        <input type="number" 
        style={{ width: "100px", marginLeft: "10px", marginRight: "10px" }} 
        value={budget} 
        readOnly 
        />
        */}
        <button onClick={incrementBudget} style={{ margin: "0 5px" }}>↑</button>
        <button onClick={decrementBudget} style={{ margin: "0 5px" }}>↓</button>
    </span>
    </div>
    );
};
export default Budget;