import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// 전체보기
export const getAnimals = async () => {
  return await instance.get("animal");
};

// 1개 보여주기 - getAnimal
export const getAnimal = async (no) => {
  return await instance.get("animal/" + no); // 서버 url!! (detail 아님)
};

// 수정하기 - updateAnimal
export const updateAnimal = async (data) => {
  return await instance.put("animal", data);
};

// 추가
export const addAnimal = async (data) => {
  return await instance.post("animal", data);
};

// 삭제
export const delAnimal = async (no) => {
  return await instance.delete("animal/" + no);
};
