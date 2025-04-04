"use strict";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parents" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "siblings" }, "I'm first h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "siblings" }, "I'm second h1 tag"),
  ]),
]);

root.render(parent);
