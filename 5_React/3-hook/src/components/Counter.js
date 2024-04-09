import { useState, useEffect } from "react"; // useState : 상태관리 / useEffect : 시점
import Btn from "./Btn";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always!"); // useState 사용 시 상태관리 부분(변하는 부분)만 리로드(업데이트), 계속 쌓임

  useEffect(() => {
    console.log("useEffect!");
  }, []); // [] : 바뀌었을 때의 조건, 비어있을 경우 console은 페이지 첫 로드 시에만 찍힘

  useEffect(() => {
    console.log("counter change!");
  }, [counter]); // 조건([]) : counter가 변화될 때 / 카운터가 변화될 때마다 console에 찍힘

  return (
    <div>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="+" />
      <Btn click={minus} text="-" />
    </div>
  );
};

export default Counter;
