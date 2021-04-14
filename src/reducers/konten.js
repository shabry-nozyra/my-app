import {
    GET_KONTEN_LIST,
    GET_KONTEN_DETAIL,
    POST_KONTEN_CREATE,
    PUT_KONTEN_EDIT
  } from "../Actions/KontenActions";
  
  
  let initialState = {
    getKontenList: false,
    errorKonten: false,
    getKontenDetail: false,
    errorKontenDetail: false,
    getResponDataKonten: false,
    errorResponDataKonten: false,
    title: "konten"
  };
  
  const konten = (state = initialState, action) => {
    switch (action.type) {
      case GET_KONTEN_LIST:
        return {
          ...state,
          getKontenList: action.payload.data,
          errorKonten: action.payload.errorMessage,
        };
  
      case GET_KONTEN_DETAIL:
        return {
          ...state,
          getKontenDetail: action.payload.data,
          errorKontenDetail: action.payload.errorMessage,
        };
  
      case POST_KONTEN_CREATE:
        return {
          ...state,
          getResponDataKonten: action.payload.data,
          errorResponDataKonten: action.payload.errorMessage,
        };
  
      case PUT_KONTEN_EDIT:
        return {
          ...state,
          getResponDataKonten: action.payload.data,
          errorResponDataKonten: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };
  
  export default konten;