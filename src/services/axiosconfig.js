import axios from "axios";

export const API = axios.create({
    baseURL: "https://crude-bh.herokuapp.com/api/books/"
});