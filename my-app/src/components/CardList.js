import React from "react";
import Card from "./Card";

const CardList = ({ reposits }) => {
  return (
    <div>
      {reposits.map((repos) => (
        <Card repos={repos} key={repos.id} />
      ))}
    </div>
  );
};

export default CardList;
