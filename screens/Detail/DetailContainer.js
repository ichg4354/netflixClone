import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({
  route: {
    params: { id, title, poster, overview, backgroundImage, votes },
  },
}) => {
  const [movie, setMovie] = useState();
  const getData = async () => {
    
    const [data, dataError] = await movieApi.movie(id);
    setMovie(data);
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
    ></DetailPresenter>
  );
};

export default DetailContainer;
