import React, { useEffect } from "react";
import { useItemListContext } from "../../context/ProductListContext";
import { useProductDetailsContext } from "../../context/ProductDetailsContext";
import Item from "./components/product/product";
import styles from "./ProductList.module.scss";
import Breadcrumb from "../BreadcrumbCategorys/BreadcrumbCategorys";
const ItemList = (props) => {
  const { itemList, categoryList } = useItemListContext();
  const { setQuery, saveRequest } = useProductDetailsContext();
  const getItem = (id) => {
    saveRequest(true);
    setQuery(id);
  };
  useEffect(() => {
    getItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb list={categoryList} />
      <div className={styles.container}>
        {itemList.map((el, i) => (
          <Item
            getItem={getItem}
            key={el.id}
            product={el}
            placeholder={props.placeholder}
            hasHr={i !== itemList.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
