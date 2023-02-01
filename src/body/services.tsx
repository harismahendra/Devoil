import React, { Component } from "react";
import MyImage from "./myimage";

interface ServicesProps {}

class Services extends Component<ServicesProps> {
  render() {
    return (
      <div className="grid grid-cols-2 hover:grid-cols-2 ml-[200px] mr-[200px]">
        <div>
        <img src={require('../body/imgsource/dua.png')} alt='Img' className=""/>
        </div>
        <div className="pt-[150px]">
          <h1 className="flex justify-center font-semibold text-[50px]">
          Services
          </h1>
          <p className="text-m m-5">
          From campaign planning and consultation to content creation and extended social media campaigning, I'm here to help your brand sound like you online.
          </p>
          <button className="bg-slate-500 text-white p-3 m-5 mt-10">Read More</button>
        </div>
        
      </div>
    );
  }
}

export default Services;
