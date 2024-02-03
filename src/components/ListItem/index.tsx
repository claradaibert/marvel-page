import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

// Hook import
import { useAppSelector } from "../../hooks/reduxHooks";

// Util import
import { IResponse } from "../../utils/ResponseModels";
import { APIParams } from "../../utils/APIParams";

// Style import
import { Container } from "./styles";

interface IProps {
  item: IResponse;
}

const ListItem: React.FC<IProps> = ({ item }) => {
  // Hooks
  const theme = useAppSelector((state) => state.theme.currentTheme);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const { apiBaseRoute } = APIParams(location);

  const itemImageSource = `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`;

  const getItemName = () => {
    if (item?.name) return item?.name;
    if (item?.fullName) return item?.fullName;
    return item?.title;
  };
  const itemName = getItemName();

  const handleClick = () => {
    navigate(`/itemDetails/${item.id}/${apiBaseRoute}`);
  }

  return (
    <Container containerStyle={theme === "light" ? "black" : "red"}>
      <div className="imgContainer">
        <img alt={`${itemName} photo`} aria-hidden src={itemImageSource} />
      </div>
      <div className="infoContainer">
        <p className="itemName">{itemName.toUpperCase()}</p>
        <button className="seeMoreButton" type="button" onClick={() => handleClick()}>
          <p>Ver mais</p>
          <IoMdArrowForward />
        </button>
      </div>
    </Container>
  );
};

export { ListItem };
