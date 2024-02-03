import React from "react";

// Asset import
import { ReactComponent as MarvelLogo } from "../../assets/marvel_icon.svg";

// Inner component import
import { ThemeToggle } from "./ThemeToggle";
import { MenuButton } from "./MenuButton";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <MenuButton />
      <div className="logoContainer">
        <MarvelLogo />
      </div>
      <ThemeToggle />
    </Container>
  );
};

export { Header };
