import axios from "axios";

export const getMovies = async () => {
  return await axios.get("http://localhost:8080/api/movie");
};

export const addMovie = async (data) => {
  // data : body로 보내는 값
  return await axios.post("http://localhost:8080/api/movie", data);
};

export const delMovie = async (no) => {
  return await axios.delete("http://localhost:8080/api/movie/" + no);
};
