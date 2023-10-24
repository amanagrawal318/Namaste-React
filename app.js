
// ReactElement(object)=> HTML(browser understands)
const parent = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ])
);

// to solve complexity of writing react code from createelement we Use 
// JSX
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "xyz" },
  "Hello Aman from react"
);
console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

//render comvert object to html tag
root.render(parent);
