import axios from "axios";

export const GET_PETUGAS_LIST = "GET_PETUGAS_LIST";
export const POST_PETUGAS_CREATE = "POST_PETUGAS_CREATE";
export const GET_PETUGAS_DETAIL = "GET_PETUGAS_DETAIL";
export const DELETE_PETUGAS_DETAIL = "DELETE_PETUGAS_DETAIL";


export const getPetugasList = () => {
    return (dispatch) => {
      axios.get("https://pantauapp.azurewebsites.net/petugas")
        .then(function (response) {
          dispatch({
            type: GET_PETUGAS_LIST,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: GET_PETUGAS_LIST,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  
export const getPetugasDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://pantauapp.azurewebsites.net/petugas/" +
        id
      )
      .then(function (response) {
        dispatch({
          type: GET_PETUGAS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PETUGAS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const deletePetugasDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PETUGAS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
export const postPetugasCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://pantauapp.azurewebsites.net/petugas/add",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_PETUGAS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_PETUGAS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
