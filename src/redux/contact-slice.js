import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {
    useParams
  } from "react-router-dom";

//ENVOIS DE DONNÉES AUX SERVEURS

export const createContactAsync = createAsyncThunk(
     'contact/createContactAsync',
     async (values) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `https://phonebook-api-242.herokuapp.com/api/contact`,
                data: values
            });
            return response.data
        } catch (error) {
            console.log("error:", error);
        }
    }
);

//RECUPERATION DES DONNEES

export const receveContactAsync = createAsyncThunk(
    'contact/receveContactAsync',
     async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `https://phonebook-api-242.herokuapp.com/api/contact` ,
                
            });
            return response.data;      
        } catch (error) {
            console.log("error:", error);
        }
    }
);
 

//SUPPRESSION DE DONNEES

export const deleteContactAsync = createAsyncThunk(
    'contact/deleteContactAsync,receveContactAsync',
    async (id,{dispatch}) => {
      try {
            const response = await axios({
                method: 'DELETE',
                url:(`https://phonebook-api-242.herokuapp.com/api/contact/${id}`) 
                
            });
            
          dispatch(receveContactAsync);
            return response.data;       
         } catch (error) {
            console.log("error:", error);
        }
    }
);

//MODIFICATION DES DONNEES

export const updateContactAsync = createAsyncThunk(
    'contact/updateContactAsync,',
    async (values) => {
      try {
            const params=useParams();
            const response = await axios({
                method: 'PUT',
                url:(`https://phonebook-api-242.herokuapp.com/api/contact/${params.id}`,values) 
                
            });
            
         console.log(response)
            return response.data;       
         } catch (error) {
            console.log("error:", error);
        }
       
    }
);


export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        resp: "",
        error: "",
        status: "idle",
        loading: false,
        contacts: []
    },

    reducers: {},

    extraReducers: {
        [createContactAsync.pending](state) {
            state.status = 'pending'
            state.loading = true
        },
        [createContactAsync.fulfilled](state, action) {
            state.status = "success"
            state.loading = false
            state.res= action.payload
        },
        [createContactAsync.rejected](state, action) {
            state.status = 'failed'
            state.loading = false
            state.res = action.payload
        },

        [receveContactAsync.pending](state) {
            state.status = 'pending'
            state.loading = true
        },
        [receveContactAsync.fulfilled](state, action) {
            state.status = "success"
            state.loading = false
            state.contacts = action.payload
        },

        [deleteContactAsync.pending](state) {
            state.status = 'pending'
            state.loading = true
        },
        [deleteContactAsync.fulfilled](state, action) {
            state.status = "success"
            state.loading = false
        },

        [rechercheContactAsync.pending](state) {
            state.status = 'pending'
            state.loading = true
        },
        [rechercheContactAsync.fulfilled](state, action) {
            state.status = "success"
            state.loading = false
            state.contacts= action.payload
        },

        [updateContactAsync.pending](state) {
            state.status = 'pending'
            state.loading = true
        },
        [updateContactAsync.fulfilled](state, action) {
            state.status = "success"
            state.loading = false
            state.contacts= action.payload
        }
       

    }
});




export default contactSlice.reducer;