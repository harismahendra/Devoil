import React, { Component } from "react";
import NavBar from "./Categories";

interface HeaderProps {}

class Header extends Component<HeaderProps> {
  handleClick = (page: string) => {
    console.error("Function not implemented.");
  };

  render() {
    return (
      <div>
        <h1 className="flex justify-center font-bold text-[75px]">DOVILE</h1>
        <NavBar handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Header;
