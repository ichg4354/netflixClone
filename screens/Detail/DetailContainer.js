import React, { useEffect, useLayoutEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({
  route: {
    params: { id, title, poster, overview, backgroundImage, votes, isTv },
  },
}) => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    if (isTv) {
      const [data, dataError] = await tvApi.show(id);
      setMovie(data);
      setLoading(false);
    } else {
      const [data, dataError] = await movieApi.movie(id);
      setMovie(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DetailPresenter
      id={id}
      title={title}
      poster={poster}
      overview={overview}
      backgroundImage={backgroundImage}
      votes={votes}
      reloadFn={getData}
      {...movie}
      loading={loading}
    ></DetailPresenter>
  );
};

export default DetailContainer;
