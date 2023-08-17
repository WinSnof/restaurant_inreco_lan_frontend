import axios from "axios";


const URL = "http://localhost:8080/api/v1/";

export const $host = axios.create({
  baseURL: URL
});
