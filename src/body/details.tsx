import React, { Component } from "react";

interface DetailsProps {}

class Details extends Component<DetailsProps> {
  render() {
    return (
      <div className="p-[100px] bg-yellow-50 m-5">
        <div className="mr-[300px] ml-[300px]">
          <h1 className="flex justify-center text-4xl">
            My name is Dovile
          </h1>
          <p className="text-center mt-5 text-xl">
          I'm your new social media bestie. My mission is to help small and medium-sized businesses grow their audience and brand recognition through social media. To do that, I believe it's paramount to create a committed and genuine community that has a positive influence on people’s lives beyond the online sphere. My goal is to help you understand the power of social media and create connections that go beyond the internet.
          </p>
          
        </div>
      </div>
    );
  }
}

export default Details;
