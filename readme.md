# Namaste React

# Parcel

- Dev
- Local Server
- live reload
- HMR -> Hot Module Replacement
- File Watching Algorithm in C++
- Caching - Faster builds
- Image Optimization
- Consistent Hashing
- Code Splitting
- Differential Bundling => to support older browsers
- Diagnostics
- Error Handling
- Tree Shaking - removing unused code

# Namaste Food

/\*\*

- Header
- - Logo
- - Navigation Item
- Body
- - Search Input
- - Card Container
- -- restaurent cards
- - Img,
- - Name of res, star rating, cuisine, delivery time
- Footer
- - Copyright
- - links
    \*/

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);
/\*\*

- JSX - is not html in javascript
- it is html like syntax
- code is transpiled before it reaches the JS engine done by PARCEL - Babel
-
- JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
- Babel - turns our ES-6+ code back to ES-5 so that browser can understand
  \*/

/\*
const jsxElement = <h1 id="heading">Namaste React using JSX Element</h1>;
const JsxComponent = () => (

  <h1 id="heading2">Namaste React using JSX component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// React component
const HeadingComponent = () => {
return (

<div id="container">
<HeadingComponent />
<h1 id="heading">Namaste React Functional component</h1>;
</div>
);
};
// root.render(<HeadingComponent />);

const NewOne = () => {
return (

<h2 id="newOne">This is for testing functional components in React</h2>
);
};

const data = 878787;

const Test = () => {
return (

<div id="test">
<h1>{data}</h1>
{jsxElement}
{JsxComponent()}
<JsxComponent />
<JsxComponent></JsxComponent>
<h1>HELLO from functional component</h1>
<NewOne />
</div>
);
};
root.render(<Test />);
\*/

# React Hooks (Normal JS function)

(Normal JS utility functions inside React)
-useState() -- Super powerul react variables
-useEffect()
