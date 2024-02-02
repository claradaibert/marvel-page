import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
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

// Service import
import { api } from "../../services";

// Util import
import { ICharactersResponse } from "../../utils/ResponseModels";

// Inner component import
import { SearchBar } from "./SearchBar";

import { Container } from "./styles";

interface IProps {
  pageType: string;
  pageList: ICharactersResponse[] | undefined;
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
    <Container>
      <Header />
      <div className="bodyContainer">
        <div className="pageTitle">{pageType}</div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {pageList?.map((item) => (
          <ListItem item={item} />
        ))}
        {totalItems > (pageList?.length || 0) && (
          <Button
            handleClick={() => handleSeeMoreClick()}
            text="VER MAIS"
            loading={loading}
          />
        )}
      </div>
    </Container>
  );
};

export { PageLayout };
