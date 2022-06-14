import { createContext, useReducer } from "react";

export const uiContext = createContext();

const initialState = {
   showDrawer: false
}

const uiReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_DRAWER':
         return {
            ...state,
            showDrawer: !state.showDrawer
         }
      default:
         return {
            ...state
         }
   }
}

export const UIContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(uiReducer, initialState);

   const toggleDrawer = () => {
      dispatch({ type: 'TOGGLE_DRAWER' });
   }

   const createContext = {
      showDrawer: state.showDrawer,
      toggleDrawer: toggleDrawer
   }

   return (
      <uiContext.Provider value={createContext}>
         {children}
      </uiContext.Provider>
   );
}