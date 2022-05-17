import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(token) {
       axios.defaults.headers.common.Authorization = '' 
    }
}

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token)
        return data;
    } catch (error) {
        
    };
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token)

        return data;
    } catch (error) {
        
    };
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('/users/logout', credentials);
        token.unset()
        return data;
    } catch (error) {
        
    };
});


const operations = {
    register,
    logIn,
    logOut,
}
export default operations;