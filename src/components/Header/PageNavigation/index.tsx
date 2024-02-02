import React from "react";
import { useNavigate } from "react-router-dom";

const PageNavigation: React.FC = () => {
  // Hooks
  const navigate = useNavigate();

  return (
    <>
      <button
        className="navMenu"
        type="button"
        onClick={() => navigate("/characters")}
      >
        Personagens
      </button>
      <button
        className="navMenu"
        type="button"
        onClick={() => navigate("/comics")}
      >
        Quadrinhos
      </button>
      <button
        className="navMenu"
        type="button"
        onClick={() => navigate("/creators")}
      >
        Criadores
      </button>
    </>
  );
};

export { PageNavigation };
