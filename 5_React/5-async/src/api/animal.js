import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// fetch ~ then 방식
export const getFetch = () => {
  return (
    fetch("http://localhost:8080/api/animal")
      .then((response) => {
        return response.json();
      })
      // return 값 response.json() : 후처리 한번 더 필요
      .then((data) => {
        return data;
      })
  );
};

// async ~ await 방식
export const getAwait = async () => {
  const response = await fetch("http://localhost:8080/api/animal");
  console.log(response);
  return response.json();
};

// axios (async ~ await) 방식
export const getAxios = async () => {
  const response = await axios.get("http://localhost:8080/api/animal");
  console.log(response);
  return response.data;
};

// react-query
export const useGetQuery = () => {
  return useQuery({
    queryKey: ["animal"],
    queryFn: getAxios,
  });
};
