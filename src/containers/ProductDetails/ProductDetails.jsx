import React, { useEffect } from 'react';
import { useProductDetailsContext } from '../../context/ProductDetailsContext';
import { formatCurrency } from '../../common/utils/utils';
import Breadcrumb from '../../components/BreadcrumbCategorys/BreadcrumbCategorys';
import Item from './components/product';
import { useParams } from 'react-router-dom';

const ItemDetails = props => {
  const { itemDetails, loaded, saveRequest, setQuery, categoryList, setItemDetails, setLoaded } = useProductDetailsContext();
  const {id} = useParams();
  useEffect(()=>{
    
    if (id.trim() !== '') {
      saveRequest(true);
      setQuery(id);
    };
    return () =>{
      setItemDetails([]);
      setLoaded(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <Breadcrumb list={categoryList} />
      { loaded && (
        <Item
          picture={itemDetails?.items.picture}
          title={itemDetails?.items.title}
          condition={itemDetails?.items.condition}
          sold_quantity={itemDetails?.items.sold_quantity}
          price={formatCurrency(itemDetails?.items.price.currency,itemDetails?.items.price.amount)}
          description={itemDetails?.description}
        />
      )}
    </>
  );
};


export default ItemDetails;
