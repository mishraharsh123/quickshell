//Quicksell frontend assignment 
//14/10/2024
//Vishnu Shukla


import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Reducers/DataReducer';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;