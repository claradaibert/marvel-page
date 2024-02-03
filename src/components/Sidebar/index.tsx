import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { IoBookOutline, IoLogOutOutline, IoStarOutline } from "react-icons/io5";
import { GoPencil, GoPerson } from "react-icons/go";

// Hook import
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";

// Action import
import { setSidebar } from "../../store/theme/slice";

// Style import
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();
  const sidebarOpen = useAppSelector((state) => state.theme.sideBarOpen);

  // Function to close sidebars
  function closeSidebar() {
    if (
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <=
      768
    ) {
      dispatch(setSidebar(false));
    }
  }

  const handleItemClick = (route: string) => {
    navigate(`${route}`);
    closeSidebar();
  };

  const handleExit = () => {
    navigate("/");
    setCookie("userKeys", {});
  };

  return (
    <Container open={sidebarOpen}>
      <button
        className="items"
        type="button"
        onClick={() => handleItemClick("/characters")}
      >
        <GoPerson />
        Personagens
      </button>
      <button
        className="items"
        type="button"
        onClick={() => handleItemClick("/comics")}
      >
        <IoBookOutline />
        Quadrinhos
      </button>
      <button
        className="items"
        type="button"
        onClick={() => handleItemClick("/creators")}
      >
        <GoPencil />
        Criadores
      </button>
      <button
        className="items"
        type="button"
        onClick={() => handleItemClick("/characters")}
      >
        <IoStarOutline />
        Meus favoritos
      </button>
      <button className="items" type="button" onClick={() => handleExit()}>
        <IoLogOutOutline />
        Sair
      </button>
    </Container>
  );
};

export { Sidebar };
