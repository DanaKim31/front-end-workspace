import { getAnimals, delAnimal } from "../api/animal";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;

  th {
    font-weight: bold;
    padding: 10px;
  }

  td {
    padding: 10px;
    text-align: center;
    border-top: 1px dashed gray;
  }
`;

const Home = () => {
  const [animals, setAnimals] = useState([]);

  // api 불러올 메서드
  const animalAPI = async () => {
    const result = await getAnimals();
    console.log(result.data);
    setAnimals(result.data);
  };

  useEffect(() => {
    animalAPI();
  }, []);

  // 삭제
  const onDelete = async (no) => {
    await delAnimal(no);
    setAnimals(animals.filter((animal) => animal.no !== no)); // 삭제하려는 행 no가 아닌 리스트로 리로드
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {animals?.map((animal) => (
          // PK를 key로 지정 !!! 필수 !!!
          <tr key={animal.no}>
            <td>{animal.name}</td>
            <td>{animal.age}</td>
            <td>
              <button onClick={() => onDelete(animal.no)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
