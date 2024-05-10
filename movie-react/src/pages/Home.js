import styled from "styled-components";
import { getMovies, delMovie } from "../api/movie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = styled.table`
  width: 100%;
  th {
    width: 25%;
    font-weight: bold;
  }

  td {
    padding-top: 20px;
    cursor: pointer;
  }
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const movieAPI = async () => {
    const result = await getMovies();
    setMovies(result.data);
  };

  useEffect(() => {
    movieAPI();
  }, []);

  const onDelete = async (no) => {
    await delMovie(no);
    setMovies(movies.filter((movie) => movie.no !== no));
  };

  const onDetail = (no) => {
    navigate("/" + no);
  };

  return (
    <>
      <h1>영화 목록</h1>
      <Table>
        <thead>
          <tr>
            <th>제목</th>
            <th>장르</th>
            <th>영화배우</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.no} onClick={() => onDetail(movie.no)}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.actor}</td>
              <td>
                <button onClick={() => onDelete(movie.no)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
