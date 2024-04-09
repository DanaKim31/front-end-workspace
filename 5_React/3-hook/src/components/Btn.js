// component 쪼개기 (컴포넌트명은 대문자로 시작)
// 리액트 : 상위 컴포넌트가 하위 컴포넌트로만, "단방향"으로만 데이터 전달 가능
const Btn = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
};

export default Btn;
