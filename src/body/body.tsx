import React, { Component } from "react";
import Details from "./details";
import Featured from "./featured";
import Greeting from "./greeting";
import Last from "./last";
import MyBlog from "./myblog";
import Ready from "./ready";
import Services from "./services";

interface BodyProps {}

class Body extends Component<BodyProps> {

  render() {
    return (
      <div className="flex-col justify-items-center ">
        <Greeting />
        <Featured/>
        <Details/>
        <Services/>
        <Ready/>
        <MyBlog/>
        <Last/>

      </div>
    );
  }
}

export default Body;
