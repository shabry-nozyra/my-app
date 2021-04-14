import {
  GET_TPSS_LIST,
  GET_TPS_DETAIL,
  POST_TPS_CREATE,
  PUT_TPS_EDIT
} from "../Actions/UserActions";


let initialState = {
  getTpsList: false,
  errorTps: false,
  getTpsDetail: false,
  errorTpsDetail: false,
  getResponDataTps: false,
  errorResponDataTps: false,
  title: "tpss"
};

const tpss = (state = initialState, action) => {
  switch (action.type) {
    case GET_TPSS_LIST:
      return {
        ...state,
        getTpsList: action.payload.data,
        errorTps: action.payload.errorMessage,
      };

    case GET_TPS_DETAIL:
      return {
        ...state,
        getTpsDetail: action.payload.data,
        errorTpsDetail: action.payload.errorMessage,
      };

    case POST_TPS_CREATE:
      return {
        ...state,
        getResponDataTps: action.payload.data,
        errorResponDataTps: action.payload.errorMessage,
      };

    case PUT_TPS_EDIT:
      return {
        ...state,
        getResponDataTps: action.payload.data,
        errorResponDataTps: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default tpss;