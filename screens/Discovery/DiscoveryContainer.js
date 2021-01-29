import React, { useEffect } from "react";
import { useState } from "react";
import { movieApi } from "../../api";
import DiscoveryPresenter from "./DiscoveryPresenter";

const DiscoveryContainer = () => {
  const [movie, setMovie] = useState({});
  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setMovie({ discover, discoverError });
  };
  useEffect(() => {
    getData();
  }, []);
  return <DiscoveryPresenter {...movie}></DiscoveryPresenter>;
};

export default DiscoveryContainer;
