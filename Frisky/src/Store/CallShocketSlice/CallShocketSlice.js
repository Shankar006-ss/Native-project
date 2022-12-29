import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

const initialState = {
    User: ""
}
export var details = [{
   
    "email": 'varshini@gmail.com',
    "password": 'Varshini@123',
    "ConfirmPassword": 'Varshini@123',
    "Name":'varshini',
    
},
{
    
    "email": 'sri@gmail.com',
    "password": 'Sri@123456',
    "ConfirmPassword":'Sri@123456',
    "Name":'sri'

}]
const callSocketSlices = createSlice({
    name: 'callSocketSlice',
    initialState,
    reducers: {
        getDetails: (state) => {
            state.User = details
        }
    }
})
export const { getDetails } = callSocketSlices.actions;
export default callSocketSlices.reducer;