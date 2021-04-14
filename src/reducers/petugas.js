import {
    GET_PETUGAS_LIST,
    POST_PETUGAS_CREATE,
    GET_PETUGAS_DETAIL,
  } from "../Actions/PetugasActions";
  
  
  let initialState = {
    getPetugasList: false,
    errorPetugasList: false,
    getPetugasDetail: false,
    errorPetugasDetail: false,
    getResponDataPetugas: false,
    errorResponDataPetugas: false,
    title: "petugas"
  };
  
  const petugas = (state = initialState, action) => {
    switch (action.type) {
      case GET_PETUGAS_LIST:
        return {
          ...state,
          getPetugasList: action.payload.data,
          errorPetugasList: action.payload.errorMessage,
        };
  
      case GET_PETUGAS_DETAIL:
        return {
          ...state,
          getPetugasDetail: action.payload.data,
          errorPetugasDetail: action.payload.errorMessage,
        };
  
      case POST_PETUGAS_CREATE:
        return {
          ...state,
          getResponDataPetugas: action.payload.data,
          errorResponDataPetugas: action.payload.errorMessage,
        };
  
    //   case PUT_TPS_EDIT:
    //     return {
    //       ...state,
    //       getResponDataTps: action.payload.data,
    //       errorResponDataTps: action.payload.errorMessage,
    //     };
  
      default:
        return state;
    }
  };
  
  export default petugas;