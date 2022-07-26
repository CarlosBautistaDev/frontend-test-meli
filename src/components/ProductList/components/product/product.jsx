import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as U from "../../../../common/utils/utils";
import styles from "../product/product.module.scss";

const Item = ({ product, placeholder, hasHr, getItem }) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const { id, title, price, picture,  free_shipping } = product;

  return (
    <Link
      className={styles.wrapper_link}
      to={`/items/${id}`}
      onClick={() => getItem(id)}
    >
      <div className={styles.container} id={id}>
        <img
          src={placeholder}
          className={styles.thumbnail}
          alt={"Imagen por defecto"}
          style={imageIsLoading ? {} : { display: "none" }}
        />
        <img
          src={picture}
          className={styles.thumbnail}
          alt={title}
          onLoad={() => setImageIsLoading(false)}
          style={imageIsLoading ? { display: "none" } : {}}
        />
        <div className={styles.details_wrapper}>
          <h1 className={styles.details_wrapper__price}>
            {U.formatCurrency(price.currency, price.amount)}
            {free_shipping && (
              <span className={styles.details_wrapper__free_shipping} />
            )}
           
          </h1>
          <p className={styles.details_wrapper__title}>{title}</p>
        </div>
      </div>
      {hasHr && <hr />}
    </Link>
  );
};

export default Item;
