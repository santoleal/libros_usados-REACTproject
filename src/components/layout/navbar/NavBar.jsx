import { Outlet } from "react-router-dom";
import { NavBarContainer } from "./navbar";

const NavBar = () => {
  return (
    <>
      <NavBarContainer />;
      <Outlet />;
    </>
  );
};

export default NavBar;
