import React from "react";
import { YoutubeData } from "./../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div>
      {props.children}
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          author={item.author}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
