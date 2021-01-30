import React, { useEffect } from "react";
import { useState } from "react";
import { movieApi } from "../../api";
import DiscoveryPresenter from "./DiscoveryPresenter";

const DiscoveryContainer = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setMovie({ discover });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return <DiscoveryPresenter {...movie} loading={loading}></DiscoveryPresenter>;
};

export default DiscoveryContainer;
