import axios from "axios";

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.authorization;
  }
}
