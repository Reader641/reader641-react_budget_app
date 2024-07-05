import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let budget = 0;
    switch (action.type) {
        case 'ADD_EXPENSE':
            let total_budget = 0;
            total_budget = state.expenses.reduce(
                (previousExp, currentExp) => {
                    return previousExp + currentExp.allocated_budget
                },0
            );
            total_budget = total_budget + action.payload.allocated_budget;
            action.type = "DONE";
            if(total_budget <= state.budget) {
                total_budget = 0;
                state.expenses.map((currentExp)=> {
                    if(currentExp.name === action.payload.name) {
                        currentExp.allocated_budget = action.payload.allocated_budget + currentExp.allocated_budget;
                    }
                    return currentExp
                });
                return {
                    ...state,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return {
                    ...state
                }
            }
        case 'RED_EXPENSE':
            const red_expenses = state.expenses.map((currentExp)=> {
                if (currentExp.name === action.payload.name && currentExp.allocated_budget - action.payload.allocated_budget >= 0) {
                    currentExp.allocated_budget =  currentExp.allocated_budget - action.payload.allocated_budget;
                    budget = state.budget + action.payload.allocated_budget
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                expenses: [...red_expenses],
            };
        case 'DELETE_EXPENSE':
            action.type = "DONE";
            state.expenses.map((currentExp)=> {
                if (currentExp.name === action.payload) {
                    budget = state.budget + currentExp.allocated_budget
                    currentExp.allocated_budget =  0;
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                budget
            };
        case 'SET_BUDGET':
            action.type = "DONE";
            state.budget = action.payload;

            return {
                ...state,
            };
        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            }
        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', allocated_budget: 50 },
        { id: "Finance", name: 'Finance', allocated_budget: 300 },
        { id: "Sales", name: 'Sales', allocated_budget: 70 },
        { id: "Human Resource", name: 'Human Resource', allocated_budget: 40 },
        { id: "IT", name: 'IT', allocated_budget: 500 },
    ],
    currency: '$',
    budget: 2000
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    let remaining = 0;

    if (state.expenses) {
            const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.allocated_budget);
        }, 0);
        remaining = state.budget - totalExpenses;
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};