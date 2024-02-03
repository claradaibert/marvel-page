import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Hook import
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

// Store action import
import { setKeys } from "../../store/user/slice";

// Component import
import { Header } from "../Header";

import { Container } from "./styles";
import { Sidebar } from "../Sidebar";

interface IProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<IProps> = ({children}) => {
  // Hooks
  const user = useAppSelector((state) => state.user);
  const sidebarOpen = useAppSelector((state) => state.theme.sideBarOpen);
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!cookies?.userKeys?.publicKey) {
      navigate("/");
    }

    const usersKeys = cookies?.userKeys;

    if (!user?.publicKey) {
      dispatch(setKeys(usersKeys));
    }
  }, [cookies?.userKeys, user?.publicKey, dispatch, navigate]);

  return (
    <Container sidebarOpen={sidebarOpen}>
      <Header />
      <div className="pageWrap">
        <Sidebar />
        <div className="bodyWrap">
          {children}
        </div>
      </div>
    </Container>
  );
};

export { PageLayout };
