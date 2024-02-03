import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

// Component import
import { ListItem } from "../../ListItem";
import { Button } from "../../Button";

// Util import
import { IResponse } from "../../../utils/ResponseModels";

// Inner component import
import { SearchBar } from "../SearchBar";

interface IProps {
  pageType: string;
  pageList?: IResponse[];
  handleSeeMoreClick: () => void;
  totalItems: number;
  searchLoading: boolean;
  loading: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const PageBody: React.FC<IProps> = ({
  pageType,
  pageList,
  handleSeeMoreClick,
  totalItems,
  searchLoading,
  loading,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="bodyContainer">
      <div className="pageTitle">{pageType}</div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchLoading ? (
        <div className="circularProgressContainer">
          <CircularProgress />
        </div>
      ) : (
        <>
          {pageList?.map((item) => (
            <ListItem item={item} />
          ))}
        </>
      )}
      {totalItems > (pageList?.length || 0) && (
        <Button
          handleClick={() => handleSeeMoreClick()}
          text="VER MAIS"
          loading={loading}
        />
      )}
    </div>
  );
};

export { PageBody };
