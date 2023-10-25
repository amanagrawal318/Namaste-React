import React from "react";
import ReactDOM from "react-dom/client";
// ReactElement(object)=> HTML(browser understands)

//JSX- HTML Like structure or XML Like structure
//JSX- (transpiled before it reaches the JS)- Parcel- Babel

//JSX=> React.createElement=> ReactElement-JS Object =>HTMLELement(Render)
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Hello From Namaste JSX
  </h1>
);
//babel- is js compiler - convert jsx to react.createlement

//functional component react
const HeadingComponent = () => {
  return (
    <div className="container">
      {Title()}
      <Title/>
      <Title></Title>
      <h1>Hello Namaste from component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//render comvert object to html tag
root.render(<HeadingComponent />);
