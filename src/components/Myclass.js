import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Component did Mount");
  }
  render() {
    console.log(this.props.name + " Render");
    return <h1>hello</h1>;
  }
}
export default MyClass;
