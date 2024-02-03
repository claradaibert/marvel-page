import React from "react";

// Hook import
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

// Action import
import { setSidebar } from "../../../store/theme/slice";

// Style import
import { Container } from "./styles";

const MenuButton: React.FC = () => {
  const sidebarOpen = useAppSelector((state) => state.theme.sideBarOpen);
  const dispatch = useAppDispatch();

  const handleMenuButton = () => {
    dispatch(setSidebar(!sidebarOpen));
  };
  return (
    <Container>
      <button
        type="button"
        id="menu-toggle"
        onClick={handleMenuButton}
        className={sidebarOpen ? "toggle open" : "toggle"}
      >
        <span />
        <span />
        <span />
        <span />
      </button>
    </Container>
  );
};

export { MenuButton };
