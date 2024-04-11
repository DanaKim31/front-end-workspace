import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal";
import { useEffect, useState } from "react";

const App = () => {
  // const [data, setData] = useState([]); // 데이터가 배열일 경우 초기값을 빈배열 []로 설정

  // const dataLoad = async () => {
  // const result = await getAxios();
  // setData(result);
  // };

  // useEffect(() => {
  // getAwait().then((result) => {
  // console.log(result);
  // setData(result);
  // });
  // dataLoad();
  // }, []);

  // react-query
  const { data, isLoading, isError } = useGetQuery(); // 로딩 중 / 에러일 때

  if (isLoading) return <>Loading...</>; // true : 아직 데이터를 불러오기 전 일 때(로딩 중일 때)
  if (isError) return <>Error...</>;

  return (
    <>
      {data?.map((animal) => (
        // ? : null이 아닌 경우에 처리
        <div key={animal.no}>❤{animal.name}❤</div>
      ))}
    </>
  );
};

export default App;
