import React from "react";

import { TextField } from "@mui/material";

import {Container } from "./styles";

interface IProps {
  name: string;
  value?: string;
  label: string;
  type?: string;
  handleChange: (value: string) => any;
  inputStyle?: 'black' | 'red'
}

const Input: React.FC<IProps> = ({
  name,
  value,
  label,
  type,
  handleChange,
  inputStyle,
  // onEnterKey,
}) => {
  return (
    <Container inputStyle={inputStyle}>
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