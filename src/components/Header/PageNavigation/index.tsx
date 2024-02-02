import React from "react";
import { useNavigate } from "react-router-dom";

const PageNavigation: React.FC = () => {
  // Hooks
  const navigate = useNavigate();

  return (
    <>
      <button className="navMenu">Personagens</button>
      <button className="navMenu">Revistas</button>
      <button className="navMenu">Autores</button>
    </>
  );
};

export { PageNavigation };
