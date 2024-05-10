import { addMovie } from "../api/movie";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  width: 100%;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
`;

const Btn = styled.button`
  width: 100%;
  margin: 5px;
  cursor: pointer;
  background: black;
  color: white;
  font-weight: bold;
  padding: 10px;
`;

const Create = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");

  const navigate = useNavigate();

  const onCreate = async () => {
    await addMovie({ title, genre, actor });
    navigate("/");
  };

  return (
    <>
      <h1>영화 정보 추가</h1>
      <Input
        type="text"
        placeholder="영화 제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="영화 장르 입력"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Input
        type="text"
        placeholder="영화 배우들 입력"
        value={actor}
        onChange={(e) => setActor(e.target.value)}
      />
      <Btn onClick={onCreate}>영화 추가</Btn>
    </>
  );
};
export default Create;
