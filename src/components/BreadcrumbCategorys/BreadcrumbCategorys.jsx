import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../BreadcrumbCategorys/BreadcrumbCategorys.module.scss';

const Breadcrumb = ({list}) => {
  return (
    <div className={styles.container}>
      {list !== undefined &&list.map((el,i, arr) => {
        if(arr.length -1 === i){
          return (<span key={uuidv4()}> {el} </span>);
        }
        return (<span key={uuidv4()}> {el} &gt; </span>);  
      }
      )}
    </div>
  );
};



export default Breadcrumb;
