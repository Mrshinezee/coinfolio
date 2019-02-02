import {
    FETCH_LATEST_CRYPTO,
  } from '../actionType/dashboard';

 import initialState from '../store/initialState'
//   const initialState = {
//     loggedIn: false,
//     user: {},
//     loginAction: () => {},
//     logoutAction: () => {},
//     history: {},
//     loading: false,
//   };
  
  export default (state = initialState.crypto, action) => {
    switch (action.type) {
      case FETCH_LATEST_CRYPTO:
        return {
          ...state,
          coin: action.payload,
          loading: true,
        };
      default:
        return state;
    }
  };
  