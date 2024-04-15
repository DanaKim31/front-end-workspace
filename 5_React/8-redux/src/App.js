import Header from "./components/Header";
import { increase, decrease } from "./store/counter";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </>
  );
};

export default App;
