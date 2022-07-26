/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import * as ItemDetailsContext from '../../context/ProductDetailsContext';
import ItemDetails from './ProductDetails';
import { render } from 'react-dom';



describe('<ItemDetails />',()=>{
  it('should mock the context', ()=>{
    const contextValues = {
      itemDetails: {
        item: {
          picture: 'itemPicture',
          title: 'itemTitle',
          condition: 'itemCondition',
          sold_quantity: 100,
          price:{
            currency: 'ARS',
            amount: 10000
          },
          description: 'itemDescription'
        }
      },
      loaded: jest.fn(),
      saveRequest: jest.fn(),
      setQuery: jest.fn(),
      categoryList: ['first','second']
    };
    const MOCK_MATCH = {
      params: {
        id: 'matchID'
      }
    };
    const CORRECT_ITEM_PROPS = {
      picture: 'itemPicture',
      title: 'itemTitle',
      condition: 'itemCondition',
      sold_quantity: 100,
      price: '$ 10.000.00',
      description: 'itemDescription'
    };

    jest
      .spyOn(ItemDetailsContext, 'useItemDetailsContext')
      .mockImplementation(()=> contextValues);
    const wrapper = render(<ItemDetails match={MOCK_MATCH} />);
    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper.find('Item')).toHaveLength(1);
    expect(wrapper.find('Item').props()).toEqual(CORRECT_ITEM_PROPS);
  });
});