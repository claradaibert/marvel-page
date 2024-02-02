import React from "react";
import { MdFilterList } from "react-icons/md";

// Component import
import { Input } from "../../../components/Input";

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar: React.FC<IProps> = ({ searchValue, setSearchValue }) => {
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