import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold">Contact Page</h1>
      <form>
        <input type="text" className=" border border-black p-2 m-2 rounded" placeholder="name"></input>
        <input type="text" className=" border border-black p-2 m-2 rounded" placeholder="description"></input>
        <button className=" border border-black p-2 m-2 rounded ">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
