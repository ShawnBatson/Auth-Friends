import axios from "axios";

export const axiosWithAuth = () => {
  const token = localstorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  });
};
