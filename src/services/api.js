import { getAuthToken } from "./constants";

const api_user = `${process.env.REACT_APP_USER_API}`;

export const LoginApi = (user) => {
  return fetch(`${api_user}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const RegisterApi = (user) => {
  return fetch(`${api_user}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const UserApi = (id) => {
  return fetch(`${api_user}/${id}`, {
    method: "Get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getAuthToken(),
    },
  });
};

export const UsersApi = () => {
  return fetch(api_user, {
    method: "Get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getAuthToken(),
    },
  });
};

export const UpdateApi = (id, data) => {
  return fetch(`${api_user}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getAuthToken(),
    },
    body: JSON.stringify(data),
  });
};
