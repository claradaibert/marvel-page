import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Hook import
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

// Store action import
import { setKeys } from "../../store/user/slice";

// Component import
import { Header } from "../Header";
import { Button } from "../Button";
import { ListItem } from "../ListItem";

// Util import
import {
  ICharactersResponse,
  IComicsResponse,
} from "../../utils/ResponseModels";

// Inner component import
import { SearchBar } from "./SearchBar";
import { PageBody } from "./PageBody";

import { Container } from "./styles";
import { Sidebar } from "../Sidebar";

interface IProps {
  pageType: string;
  pageList: ICharactersResponse[] | IComicsResponse[] | undefined;
  handleSeeMoreClick: () => void;
  totalItems: number;
  loading: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const PageLayout: React.FC<IProps> = ({
  pageType,
  pageList,
  handleSeeMoreClick,
  totalItems,
  loading,
  searchValue,
  setSearchValue,
}) => {
  // Hooks
  const user = useAppSelector((state) => state.user);
  const sidebarOpen = useAppSelector(state => state.theme.sideBarOpen);
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
          <PageBody 
            pageType={pageType}
            pageList={pageList}
            handleSeeMoreClick={handleSeeMoreClick}
            totalItems={totalItems}
            loading={loading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </Container>
  );
};

export { PageLayout };
