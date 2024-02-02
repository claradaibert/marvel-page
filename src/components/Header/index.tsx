import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

// Asset import
import { ReactComponent as MarvelLogo } from "../../assets/marvel_icon.svg";

// Hook import
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

// Action import
import { setSidebar } from "../../store/theme/slice";

// Import components
import { Button } from "../Button";
import { Sidebar } from "../Sidebar";

// Inner component import
import { ThemeToggle } from "./ThemeToggle";
import { PageNavigation } from "./PageNavigation";

import { Container } from "./styles";

const Header: React.FC = () => {
  const sidebarState = useAppSelector(state => state.theme.sideBarOpen);
  const dispatch = useAppDispatch();

  const handleMenuButton = () => {
    console.log(1);
    // dispatch(setSidebar(!sidebarState));
  };

  return (
    <Container>
      <button
        className="navMenu"
        type="button"
        onClick={() => handleMenuButton()}
      >
        <IoMdMenu />
      </button>
      <div className="logoContainer">
        <MarvelLogo />
      </div>
      <ThemeToggle />
    </Container>
  );
};

export { Header };
