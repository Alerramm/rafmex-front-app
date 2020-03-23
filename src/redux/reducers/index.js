import { combineReducers } from 'redux'
import actionsReducer from './actionsReducer';
import cartReducer from './cartReducer';
 
const rootReducer = combineReducers({
     
    actions: actionsReducer,
    cart: cartReducer
   
})
 
export default rootReducer;