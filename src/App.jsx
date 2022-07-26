import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Searchbar from "./containers/SearchBar/SearchBar";
import ItemList from "./components/ProductList/ProductList";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import ProductListProvider from "./context/ProductListContext";
import ProductDetailsProvider from "./context/ProductDetailsContext";
import { preload } from "./common/utils/utils";
import placeholder from "./assets/Logo_ML.png";
import styles from "./App.module.scss";

function App() {
  preload(placeholder);
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <ProductListProvider>
          <ProductDetailsProvider>
            <Searchbar />
            <Routes>
              <Route exact path="/items" element={<ItemList />} />
              <Route exact path="/items/:id" element={<ProductDetails  />} />
              <Route exact path="/" element={<></>} />
              <Route exact path="/*" element={() => <Navigate to="/" />} />
            </Routes>
          </ProductDetailsProvider>
        </ProductListProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
