import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-3 w-[150px] h-[10px]">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    );
  }
}

export default Logo;
