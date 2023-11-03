import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About </h1>
        <h1>This is Namaste React Swiggy clone</h1>
        <div>
          Loggin User
          <UserContext.Consumer>
            {({ loginUser }) => (
              <h1 className="text-xl font-bold">{loginUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First "} location={"New Delhi"} />
      </div>
    );
  }
}

/*
[Reference] : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
//render phase

- parent constructor
- parent render

  - First  child constructor
  - First  child render

  - Second child constructor
  - Second child render

// commit phase - Dom updated in batches

  - First  child component did mount
  - Second child component did mount

- parent component did mount
*/

export default About;
