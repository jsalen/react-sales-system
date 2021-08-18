import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/api/dash/";

const getSellerContent = () => {
  return axios.get(API_URL + "seller", { headers: authHeader() });
};

const getAdminContent = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getSellerContent,
  getAdminContent,
};
