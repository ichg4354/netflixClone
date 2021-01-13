import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export default () => {
  const [Tv, setTv] = useState({ loading: true });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setTv({
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
      loading: false,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TvPresenter {...Tv} />;
};
