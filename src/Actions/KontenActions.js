import axios from "axios";

export const GET_KONTEN_LIST = "GET_KONTEN_LIST";
export const POST_KONTEN_CREATE = "POST_KONTEN_CREATE";
export const GET_KONTEN_DETAIL = "GET_KONTEN_DETAIL";
export const DELETE_KONTEN_DETAIL = "DELETE_KONTEN_DETAIL";


export const getKontenList = () => {
    return (dispatch) => {
      axios.get("https://pantauapp.azurewebsites.net/konten")
        .then(function (response) {
          dispatch({
            type: GET_KONTEN_LIST,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: GET_KONTEN_LIST,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  
export const getKontenDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://pantauapp.azurewebsites.net/konten/" +
        id
      )
      .then(function (response) {
        dispatch({
          type: GET_KONTEN_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_KONTEN_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const deleteKontenDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_KONTEN_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
export const postKontenCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://pantauapp.azurewebsites.net/konten/add",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_KONTEN_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_KONTEN_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
