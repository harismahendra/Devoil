import React, { Component } from "react";
import Logo from "./logo";

interface FootProps {}

class Foot extends Component<FootProps> {

  render() {
    return (
    <div className="block justify-items-center items-center pt-[50px]">
        <div className="grid grid-cols-4 mr-[100px] ml-[100px] pl-[200px] pr-[200px]">
            <div><img className="ml-5 w-[170px] h-[200px]" src={require('./img/lima.png')} alt='Img'/></div>
            <div><img className="ml-4 w-[170px] h-[200px]" src={require('./img/enam.png')} alt='Img'/></div>
            <div><img className="ml-3 w-[170px] h-[200px]" src={require('./img/tujuh.png')} alt='Img'/></div>
            <div><img className="ml-2 w-[170px] h-[200px]" src={require('./img/delapan.png')} alt='Img'/></div>
        </div>

        <div className="grid grid-rows-2 gap-10 justify-center justify-items-center mt-[150px] pb-[100px]">
            <div>
                     <Logo/>
            </div>
               
             <div>
                <a href="#" className="underline">Terms of service</a>
            </div>
            </div>

    </div>
    );
  }
}

export default Foot;
