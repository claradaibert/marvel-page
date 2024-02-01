import React from "react";

import { TextField } from "@mui/material";

import {Container } from "./styles";

interface IProps {
  name: string;
  value?: string;
  label: string;
  type?: string;
  handleChange: (value: string) => any;
  // onEnterKey?: (event: React.KeyboardEvent) => any;
}

const Input: React.FC<IProps> = ({
  name,
  value,
  label,
  type,
  handleChange,
  // onEnterKey,
}) => {
  return (
    <Container>
      <TextField
        name={name}
        type={type}
        value={value}
        label={label}
        onChange={(e) => handleChange(e.target.value)}
        fullWidth
      />
    </Container>
  );
};

export { Input };