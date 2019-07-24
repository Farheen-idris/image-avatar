import React from "react";

// npm install tachyons
// http://tachyons.io/docs/table-of-styles/

const AvatarList = props => {
  return (
    <div className="style ma4 bg-light-red tc dib grow shadow-4 pa4 ">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
      <h1> {props.name}</h1>
      <h2>{props.work}</h2>
    </div>
  );
};

export default AvatarList;
