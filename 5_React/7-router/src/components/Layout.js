import { Outlet } from "react-router-dom"; // <Outlet /> : router.js에서 childern으로 지정한 component
import styled from "styled-components";

// Component : 대문자로 시작!
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  height: 70px;
  line-height: 70px; // header 내 세로 중앙정렬
  box-sizing: border-box; // border-bottom 1px 맞추기

  h1 {
    font-size: 3rem;
  }

  nav {
    a {
      margin-right: 15px;
    }
  }
`;

const Layout = () => {
  return (
    // 가장 상위에 한 태그로 전체 컴포넌트 묶여 있어야 함( <></> )
    <>
      <Header>
        <h1>Animal</h1>
        <nav>
          <a href="/">목록</a>
          <a href="/create">추가</a>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
