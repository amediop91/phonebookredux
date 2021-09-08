import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import Ajout from './Ajout'
import Affichage from './Affichage'
const reducer = combineReducers({
  // here we will be adding reducers
  Ajout ,
  Affichage,
})
const store = configureStore({
  reducer,
})
export default store;