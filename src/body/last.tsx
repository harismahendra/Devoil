import React, { Component } from "react";
import MyImage from "./myimage";

interface LastProps {}

class Last extends Component <LastProps> {
  render() {
    return (
      <div className="grid grid-cols-2 bg-yellow-50 pt-20 pb-20">
           <div className="ml-[250px] pt-[50px]">
           <img src={require('../body/imgsource/empat.png')} alt='Img' className="w-1/2 "/>
            </div>
          <div className="mr-[100px] pt-[100px]">
          <p>
            ”We went from having zero online presence to dominating our niche on Google. As a technophobe I never thought we could do it, but currently social media amounts for the majority of our sales.”
          </p>
          <p className="pt-5">Nicollas Ductorn <br/>
          Director of Corporate MarketingForge Inc.</p>
        </div>
      </div>
    );
  }
}

export default Last;
