import React from "react";
import { CircularProgress } from "@mui/material";

import { Container } from "./styles";

interface IProps {
  handleClick: () => void;
  text: string;
  loading?: boolean;
}

const Button: React.FC<IProps> = ({ handleClick, text, loading }) => {
  return <Container onClick={() => handleClick()}>{loading ? <CircularProgress /> : text}</Container>;
};

export { Button };
