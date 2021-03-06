import axios from "axios";

export const GET_TPSS_LIST = "GET_TPSS_LIST";
export const GET_TPS_DETAIL = "GET_TPS_DETAIL";
export const DELETE_TPS_DETAIL = "DELETE_TPS_DETAIL";
export const POST_TPS_CREATE = "POST_TPS_CREATE";
export const PUT_TPS_EDIT = "PUT_TPS_EDIT";
export const DELETE_TPS = "DELETE_TPS";



export const getTpssList = () => {
  return (dispatch) => {
    axios.get("https://pantauapp.azurewebsites.net/tps")
      .then(function (response) {
        dispatch({
          type: GET_TPSS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TPSS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getTpsDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://pantauapp.azurewebsites.net/tps/" +
        id
      )
      .then(function (response) {
        dispatch({
          type: GET_TPS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TPS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const deleteTpsDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TPS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const postTpsCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://pantauapp.azurewebsites.net/tps/add",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_TPS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_TPS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putTpsUpdate = (data) => {
  return (dispatch) => {
    axios
      .put(
        "https://pantauapp.azurewebsites.net/tps/update",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_TPS_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_TPS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteTPS = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://pantauapp.azurewebsites.net/tps/delete/"+
        id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};



export const deleteDataTPS = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TPS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
    dispatch({
      type: POST_TPS_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};