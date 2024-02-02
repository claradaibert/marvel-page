import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

// Hook import
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

// Store action import
import { switchTheme } from "../../../store/theme/slice";

const ThemeToggle: React.FC = () => {
  // Hooks
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const renderText = () => {
    if (theme.currentTheme === "light") {
      return (
        <>
          <MdOutlineWbSunny />
          <p>Modo claro</p>
        </>
      );
    }
    return (
      <>
        <FaRegMoon />
        <p>Modo escuro</p>
      </>
    );
  };

  const handleClick = () => {
    dispatch(switchTheme());
  };

  return (
    <button className="themeToggle" type="button" onClick={() => handleClick()}>
      {renderText()}
    </button>
  );
};

export { ThemeToggle };
