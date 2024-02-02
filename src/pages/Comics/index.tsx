import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDebounce } from "use-lodash-debounce";

// Hook import
import { useAppSelector } from "../../hooks/reduxHooks";

// Component import
import { PageLayout } from "../../components/PageLayout";

// Service import
import { api } from "../../services";

// Util import
import { IComicsResponse } from "../../utils/ResponseModels";

const Comics: React.FC = () => {
  // Hooks
  const user = useAppSelector((state) => state.user);

  // Local states
  const [pageList, setPageList] = useState<IComicsResponse[]>();
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const myPublicKey = user?.publicKey;

  const handleSeeMoreClick = async () => {
    setLoading(true);
    try {
      const requestOffset = pageList?.length;
      const requestSearchValue = searchValue
        ? `titleStartsWith=${searchValue}&&`
        : "";
      const response = await api.get(
        `/comics?${requestSearchValue}offset=${requestOffset}&apikey=${myPublicKey}`
      );
      setPageList((prevList) => prevList?.concat(response.data.data.results));
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
    setLoading(false);
  };

  // Add useEffect timer
  useEffect(() => {
    const handleSearch = async (e: string) => {
      try {
        const response = await api.get(
          `/comics?titleStartsWith=${e}&apikey=${myPublicKey}`
        );
        setPageList(response.data.data.results);
        setTotalItems(response.data.data.total);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
    };

    if (debouncedSearchValue) {
      handleSearch(debouncedSearchValue);
    }
  }, [debouncedSearchValue, myPublicKey]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await api.get(`/comics?apikey=${myPublicKey}`);
        setPageList(response.data.data.results);
        setTotalItems(response.data.data.total);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
    };
    if (myPublicKey) {
      getList();
    }
  }, [myPublicKey]);

  return (
    <PageLayout
      pageType="QUADRINHOS"
      pageList={pageList}
      handleSeeMoreClick={handleSeeMoreClick}
      totalItems={totalItems}
      loading={loading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export { Comics };
