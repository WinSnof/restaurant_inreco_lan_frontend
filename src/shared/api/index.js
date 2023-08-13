import axios from "axios";


const URL = "http://localhost:8080/api/";

export const $host = axios.create({
  baseURL: URL
});
