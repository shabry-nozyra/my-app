import axios from "axios";

export const GET_PASLON_LIST = "GET_PASLON_LIST";
export const POST_PASLON_CREATE = "POST_PASLON_CREATE";
export const GET_PASLON_DETAIL = "GET_PASLON_DETAIL";
export const DELETE_PASLON_DETAIL = "DELETE_PASLON_DETAIL";
export const PUT_PASLON_EDIT = "PUT_PASLON_EDIT";
export const DELETE_PASLON = "DELETE_PASLON";


export const getPaslonsList = () => {
    return (dispatch) => {
      axios.get("https://pantauapp.azurewebsites.net/paslon")
        .then(function (response) {
          dispatch({
            type: GET_PASLON_LIST,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: GET_PASLON_LIST,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  
export const getPaslonDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://pantauapp.azurewebsites.net/paslon/" +
        id
      )
      .then(function (response) {
        dispatch({
          type: GET_PASLON_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PASLON_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const deletePaslonDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PASLON_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
export const postPaslonCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://pantauapp.azurewebsites.net/paslon/add",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_PASLON_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_PASLON_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putPaslonUpdate = (data) => {
  return (dispatch) => {
    axios
      .put(
        "https://pantauapp.azurewebsites.net/paslon/update",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_PASLON_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_PASLON_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deletePaslon = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://pantauapp.azurewebsites.net/paslon/delete/"+
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



export const deleteDataPaslon = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PASLON_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
    dispatch({
      type: POST_PASLON_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
