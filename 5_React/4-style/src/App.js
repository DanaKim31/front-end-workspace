import "./asset/style.scss";
import style from "./asset/style.module.css";
import styled from "styled-components";

const Div = styled.div`
  background-color: darkcyan;
  color: white;
  font-size: 6rem;
`;

const App = () => {
  return (
    <>
      <div
        /* style={{ backgroundColor: "black", color: "white" }} */ className="class"
        /* id="id" */
      >
        <h1 className={style.deco}>Hello, React Styling!</h1>
      </div>
      <Div>Styled Components!!</Div>
    </>
  );
};

export default App;
