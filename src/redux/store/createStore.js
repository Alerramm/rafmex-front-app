import { createStore } from 'redux';  
import rootReducer from '../reducers/rootReducer';  
 
/*Create a function called configureStore */
 
export default function configureStore() {  
  return createStore(rootReducer);
}