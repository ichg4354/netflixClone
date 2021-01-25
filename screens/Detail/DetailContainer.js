import React from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({
  route: {
    params: { id, title, poster, overview, backgroundImage, votes },
  },
}) => {
  console.log(overview);
  return (
    <DetailPresenter
      id={id}
      title={title}
      poster={poster}
      overview={overview}
      backgroundImage={backgroundImage}
      votes={votes}
    ></DetailPresenter>
  );
};

export default DetailContainer;
