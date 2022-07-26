/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { ENDPOINTS } from "../common/constants/constants";
import { useItemListContext } from "./ProductListContext";

export const ProductDetailsContext = createContext();

export const useProductDetailsContext = () => useContext(ProductDetailsContext);

const ItemDetailsProvider = ({ children }) => {
  const [itemDetails, setItemDetails] = useState([]);
  const [query, setQuery] = useState("");
  const [request, saveRequest] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { categoryList } = useItemListContext();
  useEffect(() => {
    if (request && query !== undefined && query !== "") {
      const getItemData = async () => {
        const url = ENDPOINTS.BASE + ENDPOINTS.PRODUCT + query;
        const res = await axios.get(url);
        setItemDetails(res.data);
        setLoaded(true);
      };
      getItemData();
    }
  }, [query]);

  return (
    <ProductDetailsContext.Provider
      value={{
        setQuery,
        saveRequest,
        itemDetails,
        setItemDetails,
        loaded,
        setLoaded,
        categoryList,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};

export default ItemDetailsProvider;
