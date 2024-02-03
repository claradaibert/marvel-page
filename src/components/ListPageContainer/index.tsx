import React from "react";
import { CircularProgress } from "@mui/material";

// Component import
import { ListItem } from "../ListItem";
import { Button } from "../Button";
import { PageLayout } from "../PageLayout";

// Util import
import { IResponse } from "../../utils/ResponseModels";

// Inner component import
import { SearchBar } from "./SearchBar";

// Style import
import { Container } from "./styles";

interface IProps {
  pageType: string;
  pageList: IResponse[] | undefined;
  handleSeeMoreClick: () => void;
  totalItems: number;
  searchLoading: boolean;
  loading: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const ListPageContainer: React.FC<IProps> = ({
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
    <PageLayout>
      <Container>
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
      </Container>
    </PageLayout>
  );
};

export { ListPageContainer };
