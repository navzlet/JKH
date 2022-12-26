import axios from "axios";

const serverURL = "http://10.3.21.206:8080";

export const getAllRequests = (token, setRequests) => {
  axios
    .get(`${serverURL}/api/v1/requests`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => setRequests(response))
    .catch((error) => console.log(error));
};

export const getByClosedStatus = (token, setRequests) => {
  axios
    .get(`${serverURL}/api/v1/requests/status=CLOSED`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => setRequests(response))
    .catch((error) => console.log(error));
};

export const getRequest = (token, setRequest, id) => {
  axios
    .get(`${serverURL}/api/v1/requests/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => setRequest(response.data))
    .catch((error) => console.log(error));
};

export const getTypes = (token, setTypes) => {
  axios
    .get(`${serverURL}/api/v1/requests/types`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => setTypes(response.data))
    .catch((error) => console.log(error));
};

export const getPriorities = (token, setPriorities) => {
  axios
    .get(`${serverURL}/api/v1/requests/Priorities`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => setPriorities(response.data))
    .catch((error) => console.log(error));
};
