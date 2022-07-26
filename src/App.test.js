/* eslint-disable testing-library/render-result-naming-convention */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ItemListProvider from "./context/ProductListContext";
import ItemDetailsProvider from "./context/ProductDetailsContext";
import App from "./App";
import Searchbar from "./containers/SearchBar/SearchBar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

jest.mock('./common/utils/utils', () =>({
  preload: jest.fn()
}));


describe("<App />", () => {
  const wrapper = shallow(<App />);

  it("should render", () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it("should render BrowserRouter with switch and four routes", () => {
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    const router = wrapper.find(BrowserRouter);
    expect(router.find(Route)).toHaveLength(4);
  });

  it("should render ItemDetailsProvider and ItemListProvider", () => {
    expect(wrapper.find(ItemListProvider)).toHaveLength(1);
    expect(wrapper.find(ItemDetailsProvider)).toHaveLength(1);
  });

  it("should render Searchbar", () => {
    expect(wrapper.find(Searchbar)).toHaveLength(1);
  });

 
});
