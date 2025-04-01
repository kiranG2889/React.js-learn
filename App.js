"use strict";

// const heading1 = document.getElementById("root");
// const child = document.createElement("div");
// child.classList.add("child", "children");
// child.innerHTML = "this is a child";
// heading1.appendChild(child);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "siblings" }, "I'm first h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "siblings" }, "I'm second h1 tag"),
  ]),
]);

root.render(parent);

// JSX

// const camelCase = function (sentence) {
//   const split = sentence.split(" ");
//   const split2 = split.map((el) => {
//     return el.at(0).toUpperCase() + el.slice(1).toLowerCase();
//   });
//   console.log(split2);
//   return split2.join("");
// };
// const result1 = camelCase("I am KIRan and Here WE aRE and so TO TEst We");
// console.log(result1);
