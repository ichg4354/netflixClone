import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const searchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({});
  const getData = async () => {
    const [tvSearch, tvSearchError] = await tvApi.search("food");
    const [movieSearch, movieSearchError] = await movieApi.search("pirate");
    setResults({ tvSearch, tvSearchError, movieSearch, movieSearchError });
  };
  console.log(results);
  useEffect(() => {
    getData();
  }, []);
  return (
    <SearchPresenter {...results} setKeyword={(word) => setKeyword(word)} />
  );
};

export default searchContainer;
