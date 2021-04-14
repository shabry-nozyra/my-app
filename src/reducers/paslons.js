import {
    GET_PASLON_LIST,
    POST_PASLON_CREATE,
    GET_PASLON_DETAIL,
    PUT_PASLON_EDIT
  } from "../Actions/PaslonActions";
  
  
  let initialState = {
    getPaslonsList: false,
    errorPaslonsList: false,
    getPaslonDetail: false,
    errorPaslonDetail: false,
    getResponDataPaslon: false,
    errorResponDataPaslon: false,
    title: "paslons"
  };
  
  const paslons = (state = initialState, action) => {
    switch (action.type) {
      case GET_PASLON_LIST:
        return {
          ...state,
          getPaslonsList: action.payload.data,
          errorPaslonsList: action.payload.errorMessage,
        };
  
      case GET_PASLON_DETAIL:
        return {
          ...state,
          getPaslonDetail: action.payload.data,
          errorPaslonDetail: action.payload.errorMessage,
        };
  
      case POST_PASLON_CREATE:
        return {
          ...state,
          getResponDataPaslon: action.payload.data,
          errorResponDataPaslon: action.payload.errorMessage,
        };
  
      case PUT_PASLON_EDIT:
        return {
          ...state,
          getResponDataPaslon: action.payload.data,
          errorResponDataPaslon: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };
  
  export default paslons;