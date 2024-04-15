import { useParams, useNavigate } from "react-router-dom";
import { getAnimal } from "../api/animal";
import { updateAnimal } from "../api/animal";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin-right: 5px;
    padding: 5px;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
  }
`;

const Detail = () => {
  const { no } = useParams();
  const [animal, setAnimal] = useState({ name: "", age: 0 }); // 하나 값 가져오기 때문에 빈배열[] 아닌 {}, 초기값 지정해야 함
  const navigate = useNavigate();

  const animalAPI = async () => {
    const response = await getAnimal(no);
    console.log(response.data);
    setAnimal(response.data); // animal에 데이터 값 넣기
  };

  // useEffect를 불러오는 처음에만 animalAPI 메서드 한번 호출
  useEffect(() => {
    animalAPI();
  }, []);

  const update = async () => {
    await updateAnimal(animal);
    navigate("/");
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="동물 이름 입력"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="동물 나이 입력"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={update}>정보 수정</button>
    </Div>
  );
};

export default Detail;
