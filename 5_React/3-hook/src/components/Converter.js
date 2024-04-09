import { useState, useEffect } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(false);
  const [text, setText] = useState("Minutes => Hours");

  const change = (event) => {
    // console.log(event.target.value); // 입력된 값
    setNumber(event.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  // 버튼명 변경을 invert에 넣을 경우 setBool(!bool) 처리 후 처리되기 때문에 첫 클릭시 변경되지 않음 >> useEffect 사용

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :
        <input
          type="number"
          placeholder="Minutes"
          disabled={bool}
          onChange={change}
          value={bool ? number * 60 : number}
        />
      </p>
      <p>
        Hours :
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          onChange={change}
          value={bool ? number : Math.floor(number / 60)}
        />
      </p>
      <Btn text="Reset" click={reset} />
      <Btn text={text} click={invert} />
    </>
  );
};

export default Converter;
