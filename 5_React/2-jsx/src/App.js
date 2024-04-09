import { useState } from "react"; // for 상태관리

const App = () => {
  const [counter, setCounter] = useState(0); // [변수명, 변수를 변화시키기 위한 함수(useState에서 제공)] / 변수(counter)의 0 : 초기값

  const setCount = () => {
    setCounter(counter + 1); // counter = counter + 1 값, setCounter에 rendering 포함되어 있음
    // counter++; // 바뀌어야 하는 데이터 : 상태관리 필요 / life cycle : 화면이 켜지고 꺼질 때까지의 cycle
  };

  return (
    <div>
      <h1>Totla Clicks : {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
