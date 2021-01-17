import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const searchContainer = () => {
  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState({
    tvSearch: [],
    movieSearch: [],
    tvSearchError: null,
    movieSearchError: null,
  });
  const getData = async () => {
    const [tvResult, tvResultError] = await tvApi.search(keyword);
    const [movieResult, movieResultError] = await movieApi.search(keyword);
    setResults({
      tvResult,
      tvResultError,
      movieResult,
      movieResultError,
    });
  };
  const onChange = (text) => setKeyword(text);
  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={getData}
      value={keyword}
      {...results}
    />
  );
};

export default searchContainer;
