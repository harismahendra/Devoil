import React, { Component } from "react";
import MyImage from "./myimage";

interface FeaturedProps {}

class Featured extends Component<FeaturedProps> {
  render() {
    return (
      <>
        <div className="grid grid-cols-4 gap-4 ml-[100px] mr-[100px] mt-[10px]">
          <div>
          <span className="flex justify-center text-3xl">
            Featured
          </span>
        </div>
        <div> <img src={require('./Brand/brandsatu.PNG')} /></div>
        <div><img src={require('./Brand/branddua.PNG')} /></div>
        <div><img src={require('./Brand/brandtiga.PNG')} /></div>
        </div>
      </>
    );
  }
}

export default Featured;
