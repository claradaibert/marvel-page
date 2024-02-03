import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDebounce } from "use-lodash-debounce";
import { useLocation } from "react-router-dom";

// Hook import
import { useAppSelector } from "../../hooks/reduxHooks";

// Component import
import { PageLayout } from "../../components/PageLayout";

// Service import
import { api } from "../../services";

// Util import
import { IResponse } from "../../utils/ResponseModels";
import { APIParams } from "../../utils/APIParams";

const DefaultListPage: React.FC = () => {
  // Hooks
  const user = useAppSelector((state) => state.user);
  const location = useLocation().pathname;

  // Local states
  const [pageList, setPageList] = useState<IResponse[]>();
  // Initial page list to be set if searchBar is completely deleted
  const [initialPageList, setInitialPageList] = useState<IResponse[]>();

  // This state defines the total number of items are available to call for the list
  const [totalItems, setTotalItems] = useState<number>(0);

  // Value of the search input
  const [searchValue, setSearchValue] = useState<string>("");

  // Loading defines if the api call to get more list items is loading
  const [loading, setLoading] = useState<boolean>(false);

  // SearchLoading defines if the api call to get the inital list is loading
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const myPublicKey = user?.publicKey;
  const { apiBaseRoute, findByName } = APIParams(location);

  const getPageTitle = () => {
    if (location === "/characters") return "PERSONAGENS";
    if (location === "/comics") return "QUADRINHOS";
    return "CRIADORES";
  };
  const pageTitle = getPageTitle();

  const handleSeeMoreClick = async () => {
    setLoading(true);
    try {
      const requestOffset = pageList?.length;
      const requestSearchValue = searchValue
        ? `${findByName}=${searchValue}&&`
        : "";
      const response = await api.get(
        `/${apiBaseRoute}?${requestSearchValue}offset=${requestOffset}&apikey=${myPublicKey}`
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
      setSearchLoading(true);
      try {
        const response = await api.get(
          `/${apiBaseRoute}?${findByName}=${e}&apikey=${myPublicKey}`
        );
        setPageList(response.data.data.results);
        setTotalItems(response.data.data.total);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
      setSearchLoading(false);
    };

    if (debouncedSearchValue) {
      handleSearch(debouncedSearchValue);
    } else {
      setPageList(initialPageList);
    }
  }, [debouncedSearchValue, myPublicKey, apiBaseRoute, findByName, initialPageList]);

  useEffect(() => {
    const getList = async () => {
      setSearchLoading(true);
      try {
        const response = await api.get(
          `/${apiBaseRoute}?apikey=${myPublicKey}`
        );
        setPageList(response.data.data.results);
        setInitialPageList(response.data.data.results);
        setTotalItems(response.data.data.total);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
      setSearchLoading(false);
    };
    if (myPublicKey) {
      getList();
    }
  }, [myPublicKey, apiBaseRoute]);

  return (
    <PageLayout
      pageType={pageTitle}
      pageList={pageList}
      handleSeeMoreClick={handleSeeMoreClick}
      totalItems={totalItems}
      searchLoading={searchLoading}
      loading={loading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export { DefaultListPage };