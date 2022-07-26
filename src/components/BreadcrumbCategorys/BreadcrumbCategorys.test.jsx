/* eslint-disable no-undef */
import React from "react";
import Breadcrumb from "./BreadcrumbCategorys";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const MOCK_DATA = {
  categories: [
    "Herramientas",
    "Herramientas Eléctricas",
    "Perforación",
    "Taladros",
    "De Mano",
  ],
};
describe("<Breadcrumb />", () => {
  const wrapper = shallow(<Breadcrumb list={MOCK_DATA.categories} />);

  it("should render", () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it("should render a div element with a string of the shape MOCK_RESULT", () => {
    const MOCK_CRUMB = wrapper.find("div");
    expect(MOCK_CRUMB).toHaveLength(1);
  });
 
});
