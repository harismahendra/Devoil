import React, { Component } from "react";
import MyImage from "./myimage";

interface MyBlogProps {}

class MyBlog extends Component<MyBlogProps> {
  render() {
    return (
      <div className="grid grid-cols-2">
        <div className="ml-[100px] p-[100px] pt-[250px]">
          <h1 className="flex justify-center font-semibold text-[50px]">
            My Blog
          </h1>
          <p>
          I'll let you in on some trade secrets and share my top tips on how to successfully promote your brand online.
            </p>
          <button className="bg-slate-500 text-white p-3 mt-20">Read Blog</button>
        </div>
        <div>
        <img src={require('../body/imgsource/tiga.png')} alt='Img'/>
        </div>
      </div>
    );
  }
}

export default MyBlog;
