import React, { Component } from "react";
import MyImage from "./myimage";


interface GreetingProps {}

class Greeting extends Component<GreetingProps> {
  render() {
    return (
      <div className="grid grid-cols-2 bg-yellow-50">
        <div className="col-span-1 flex-row items-center p-5 ml-[100px] pb-20 mr-50 pt-[50px]">
            <h1 className="text-[50px] mt-2 text-center font-extrabold">Hello, so good to see you!</h1>
            <p className=" text-xl mt-10">
               I help small and medium-sized businesses grow their audience and brand recognition through social media.
            </p><br/>
            <button className="bg-slate-500 text-white mt-5 p-3">Contact me</button>
          </div>

        <div className="col-span-1">
          <div className=" pr-[100px]">
          <img src={require('./myprofile.jpg')} alt='Img'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;
