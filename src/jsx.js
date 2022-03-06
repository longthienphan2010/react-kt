import React from "react";

const Jsx = () => {
  const element = <div id="root">Hello World</div>;
  const Relement = React.createElement("div", { id: "root" }, "Hello World");
  return <div></div>;
};

export default Jsx;
