import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  width: 900px;
  margin: auto;
  margin-top: 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
};
export default Layout;
