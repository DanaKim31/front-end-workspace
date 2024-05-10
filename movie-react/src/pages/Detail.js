import styled from "styled-components";
import { getMovie, updateMovie } from "../api/movie";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Div = styled.div`
  div {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Btn = styled.button`
  color: white;
  background-color: black;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 5px;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px;
  padding: 10px;
`;

const Detail = () => {
  const [movie, setMovie] = useState({ title: "", genre: "", actor: "" });
  const [edit, setEdit] = useState(null);

  const { no } = useParams();
  const navigate = useNavigate();

  const movieAPI = async () => {
    const result = await getMovie(no);
    setMovie(result.data);
  };

  useEffect(() => {
    movieAPI();
  }, []);

  const onUpdate = () => {
    setEdit(movie);
  };

  const onCancel = () => {
    setEdit(null);
  };

  const onSubmit = async () => {
    await updateMovie(edit);
    navigate("/");
  };

  return (
    <Div>
      <h1>영화 정보</h1>
      {edit == null ? (
        <>
          <div>{movie.title}</div>
          <div>{movie.genre}</div>
          <div>{movie.actor}</div>
          <Btn onClick={onUpdate}>수정</Btn>
        </>
      ) : (
        <>
          <Input
            type="text"
            value={edit.title}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <Input
            type="text"
            value={edit.genre}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, genre: e.target.value }))
            }
          />
          <Input
            type="text"
            value={edit.actor}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, actor: e.target.value }))
            }
          />
          <Btn onClick={onSubmit}>완료</Btn>
          <Btn onClick={onCancel}>취소</Btn>
        </>
      )}
    </Div>
  );
};
export default Detail;
