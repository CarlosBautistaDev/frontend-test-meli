import React, { useContext, useState } from "react";
import logoMediano from "../../assets/Logo_ML.png";
import logoChico from "../../assets/ic_Search.png";
import { ItemListContext } from "../../context/ProductListContext";
import Search from "./Search/Search";
import { useNavigate } from "react-router";

const Searchbar = () => {
  let navigate = useNavigate();

  const { setQuery, saveRequest } = useContext(ItemListContext);
  const [search, saveSearch] = useState("");

  const getProducts = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    saveRequest(true);
    setQuery(search);
    saveSearch("");
    return navigate(`/items?search=${search}`);
  };

  const clearApplicationState = () => {
    saveSearch("");
    setQuery("");
    saveRequest(false);
  };

  return (
    <Search
      logoMediano={logoMediano}
      logoChico={logoChico}
      saveSearch={saveSearch}
      search={search}
      getProducts={getProducts}
      clearApplicationState={clearApplicationState}
    />
  );
};

export default Searchbar;
