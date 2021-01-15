import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const searchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({});
  const getData = async () => {
    const [tvSearch, tvSearchError] = await tvApi.search(keyword);
    const [movieSearch, movieSearchError] = await movieApi.search(keyword);
    setResults({ tvSearch, tvSearchError, movieSearch, movieSearchError });
  };
  useEffect(() => {
    getData();
  }, keyword);

  return <SearchPresenter {...results} setKeyword={setKeyword} />;
};

export default searchContainer;
