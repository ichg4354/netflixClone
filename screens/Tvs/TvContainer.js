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
    setTv({
      today,
      thisWeek,
      topRated,
      todayError,
      thisWeekError,
      topRatedError,
      loading: false,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TvPresenter {...Tv} />;
};
