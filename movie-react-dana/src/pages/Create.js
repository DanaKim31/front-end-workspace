import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { addMovie } from "../api/movie";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  input {
    width: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    cursor: pointer;
    background: black;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
`;

const Create = () => {
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [actor, setActor] = useState("");
  const [movie, setMovie] = useState({ title: "", genre: "", actor: "" });

  const navigate = useNavigate();

  const onCreate = async () => {
    // console.log(movie);
    // await addMovie({ title, genre, actor });
    await addMovie(movie);
    navigate("/");
  };

  return (
    <StyledDiv>
      <Header />
      <h1>영화 정보 추가</h1>
      {/* title, genre, actor 따로 작성할 경우 인풋
      <input
        type="text"
        placeholder="영화 제목 입력"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value )
        }
      /> 
      */}
      <input
        type="text"
        placeholder="영화 제목 입력"
        value={movie.title}
        onChange={(e) =>
          setMovie((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="영화 장르 입력"
        value={movie.genre}
        onChange={(e) =>
          setMovie((prev) => ({ ...prev, genre: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="영화 배우들 입력"
        value={movie.actor}
        onChange={(e) =>
          setMovie((prev) => ({ ...prev, actor: e.target.value }))
        }
      />
      <button onClick={onCreate}>영화 추가</button>
    </StyledDiv>
  );
};

export default Create;
