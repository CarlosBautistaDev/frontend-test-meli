import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { ENDPOINTS } from "../common/constants/constants";

export const ItemListContext = createContext();

export const useItemListContext = () => useContext(ItemListContext);
// eslint-disable-next-line react-hooks/rules-of-hooks
const ItemListProvider = (props) => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState("");
  const [request, saveRequest] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const { children } = props;
  useEffect(() => {
    if (request) {
      setItemList([]);
      const getItems = async () => {
        const url = ENDPOINTS.BASE + ENDPOINTS.QUERY + query;
        const res = await axios.get(url);
        setCategoryList(res.data.categories);
        setItemList(res.data.items);
      };
      getItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (request) {
      setItemList([]);
      const getItems = async () => {
        const url = ENDPOINTS.BASE + ENDPOINTS.QUERY + query;
        const res = await axios.get(url);
        setCategoryList(res.data.categories);
        setItemList(res.data.items);
      };
      getItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <ItemListContext.Provider
      value={{
        setQuery,
        saveRequest,
        itemList,
        categoryList,
      }}
    >
      {children}
    </ItemListContext.Provider>
  );
};

export default ItemListProvider;
