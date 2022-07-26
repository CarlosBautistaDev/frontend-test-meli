import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = ({
  logoMediano,
  logoChico,
  saveSearch,
  search,
  getProducts,
  clearApplicationState,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link
          onClick={clearApplicationState}
          className={styles.wrapper__logo}
          to={"/"}
        >
          <img src={logoMediano} alt={"Logo MercadoLibre"} />{" "}
        </Link>
        <form onSubmit={getProducts} className={styles.wrapper__search_form}>
          <input
            className={styles.wrapper__search_form__input}
            type="text"
            placeholder={"Nunca dejes de buscar"}
            onChange={(e) => saveSearch(e.target.value)}
            value={search}
            maxLength={120}
            autoFocus={true}
            autoCapitalize={"off"}
            autoCorrect={"off"}
            spellCheck={"false"}
            autoComplete={"off"}
            tabIndex={"2"}
          />
          <button type="submit" className={styles.wrapper__search_form__submit}>
            <img src={logoChico} alt={"Buscar"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
