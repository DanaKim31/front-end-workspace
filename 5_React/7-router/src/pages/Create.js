import { addAnimal } from "../api/animal";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // 추가 버튼 선택 시 홈으로 이동

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);

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

const Create = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({}); // postman {}

  // 추가 버튼 선택 시 추가한 동물 포함하여 목록화면으로 이동
  const add = async () => {
    await addAnimal(animal);
    navigate("/");
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="동물 이름 입력"
        value={animal.name}
        onChange={
          (e) => setAnimal((prev) => ({ ...prev, name: e.target.value })) // ... : 기존 정보 포함 (age: prev.age 의 함축)
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
      <button onClick={add}>동물 추가</button>
    </Div>
  );
};

export default Create;
