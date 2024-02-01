import React from "react";

import { Container } from "./styles";

interface IProps {
  handleClick: () => void;
  text: string;
}

const Button: React.FC<IProps> = ({ handleClick, text }) => {
  return <Container onClick={() => handleClick()}>{text}</Container>;
};

export { Button };
