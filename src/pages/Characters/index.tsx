import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Hook import
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";

// Store action import
import { setKeys } from "../../store/user/slice";

// Component import
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ListItem } from "../../components/ListItem";

// Service import
import { api } from "../../services";

// Util import
import { ICharactersResponse } from "../../utils/ResponseModels";

// Inner component import
import { SearchBar } from "./SearchBar";

import { Container } from "./styles";

const Characters: React.FC = () => {
  // Hooks
  const user = useAppSelector((state) => state.user);
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Local states
  const [pageList, setPageList] = useState<ICharactersResponse[]>();
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const myPublicKey = user?.publicKey;

  const handleSeeMoreClick = async () => {
    setLoading(true);
    try {
      const requestOffset = pageList?.length;
      const response = await api.get(
        `/characters?offset=${requestOffset}&apikey=${myPublicKey}`
      );
      setPageList((prevList) => prevList?.concat(response.data.data.results));
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!cookies?.userKeys?.publicKey) {
      navigate("/");
    }

    const usersKeys = cookies?.userKeys;

    if (!user?.publicKey) {
      dispatch(setKeys(usersKeys));
    }
  }, [cookies?.userKeys, user?.publicKey, dispatch, navigate]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await api.get(`/characters?apikey=${myPublicKey}`);
        setPageList(response.data.data.results);
        setTotalItems(response.data.data.total);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
    };
    if (user?.publicKey) {
      getList();
    }
  }, [user?.publicKey]);

  return (
    <Container>
      <Header />
      <div className="bodyContainer">
        <div className="pageTitle">PERSONAGENS</div>
        <SearchBar setPageList={setPageList} />
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

export { Characters };
