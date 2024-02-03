import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Hook import
import { useAppSelector } from "../../../hooks/reduxHooks";

// Util import
import { IResponse, IItems } from "../../../utils/ResponseModels";

import { Container } from "./styles";


interface IProps {
  items?: IItems[];
  title: string;
}

const InfoBox: React.FC<IProps> = ({ items, title }) => {
  // Hooks
  const theme = useAppSelector((state) => state.theme.currentTheme);

  const [open, setOpen] = useState<boolean>(false);

  const arrowIcon = open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />;

  return (
    <Container open={open} darkMode={theme === "dark"}>
      <button
        className="topContainer"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="title">{title}</div>
        {arrowIcon}
      </button>
      <div className="infoList">
        {items?.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </Container>
  );
};

export { InfoBox };
