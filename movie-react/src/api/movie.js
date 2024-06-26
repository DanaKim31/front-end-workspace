import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getMovies = async () => {
  return await instance.get("movie");
};

export const addMovie = async (data) => {
  return await instance.post("movie", data);
};

export const delMovie = async (no) => {
  return await instance.delete("movie/" + no);
};

export const getMovie = async (no) => {
  return await instance.get("movie/" + no);
};

export const updateMovie = async (data) => {
  return await instance.put("movie", data);
};
