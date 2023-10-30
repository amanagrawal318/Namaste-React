import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      userInfo: {
        login: "Aman",
        id: "123",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/amanagrawal318");
    const json = await data.json();

    console.log("component did mount");
    console.log(json);
    this.setState({
      userInfo: json,
    });

    this.interval = setInterval(() => {
      console.log("set interval componenet did mount");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componenet did update");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("will Unmount");
  }

  render() {
    console.log("Render");
    const { login, id } = this.state.userInfo;
    // debugger
    return (
      <div className="user-card">
        <h1>Name : {login}</h1>
        <h2>id : {id}</h2>
        <h2>State : Madhya Pradesh</h2>
      </div>
    );
  }
}

/**
 * --Mounting---
 *
 * Constructor (dummy data)
 * Render (dummy data)
 *     <HTML Dummy>
 * Component did mount
 *     <API CALL>
 *     <this.setState> -> State Variable - is updated
 *
 * -- Update
 *
 *      Render (APi Data)
 *      <HTML( new Api Data)
 *      component did update
 *
 */
export default UserClass;
