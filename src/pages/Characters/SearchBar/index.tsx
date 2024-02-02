import React, { useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";

// Component import
import { Input } from "../../../components/Input";

// Util import
import { ICharactersResponse } from "../../../utils/ResponseModels";

interface IProps {
  setPageList: (value: ICharactersResponse[]) => void;
}

const SearchBar: React.FC<IProps> = ({ setPageList }) => {
  // Local states
  const [searchValue, setSearchValue] = useState<string>();

  // Add useEffect timer

  return (
    <div className="searchBar">
      <Input
        name="searchValue"
        value={searchValue}
        type="text"
        label="Procurar"
        inputStyle="red"
        handleChange={(e) => setSearchValue(e)}
      />
      <button type="button">
        <MdFilterList />
        <p>Filtrar</p>
      </button>
    </div>
  );
};

export { SearchBar };
