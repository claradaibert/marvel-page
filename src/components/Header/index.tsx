import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Import components
import { Button } from "../Button";

// Inner component import
import { ThemeToggle } from "./ThemeToggle";
import { PageNavigation } from "./PageNavigation";

import { Container } from "./styles";

const Header: React.FC = () => {
  // Hooks
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();

  const handleExit = () => {
    navigate("/");
    setCookie("userKeys", {});
  };

  return (
    <Container>
      <ThemeToggle />
      <div className="navigationMenu">
        <PageNavigation />
        <div className="navMenu exitButton">
          <Button text="SAIR" handleClick={() => handleExit()} />
        </div>
      </div>
    </Container>
  );
};

export { Header };
