import React, { Component } from "react";

interface ReadyProps {}

class Ready extends Component<ReadyProps> {
  render() {
    return (
      <div className="bg-yellow-50">
        <div>
          <h1 className="flex justify-center text-3xl mt-20 mb-5 font-semibold text-[40px]">
          Are you ready to...
          </h1>
          <div className="grid grid-cols-2 pl-[200px] pr-[200px]">
            <div className="m-5 p-5">
              <h3 className="font-bold text-[20px]">
                   Create content that's visually pleasing?
                </h3>
              <p>
                  It's not enough to just create an account and post something. Your content needs to represents your brand and showcase your mission and values. And you want to do it in a way that stops the user in their tracks – with beautiful content.
                 </p>
             </div>

             <div className="m-5 p-5">
              <h3 className="font-bold text-[20px]">
            Grow your brand and turn your audience into paying clients?
            </h3>
            <span>
            Selling online is different from traditional sales channels. But most of all, you need to gain your audience's trust if you want them to part with their dollar.
            </span>
          </div>

          <div className="m-5 p-5">
              <h3 className="font-bold text-[20px]">
            Get hold of your dream clients online?
            </h3>
            <span>
            Everybody is online, so why shouldn't you try to reach out to them? With a bigger reach than ever before, the world really is your oyster when it comes to selling online.
            </span>
          </div>

          <div className="m-5 p-5">
              <h3 className="font-bold text-[20px]">
            Invest in your brand and take your business to the next level?
            </h3>
            <span>
            Social media marketing is much more than simply posting about an upcoming sale. With the right approach, you can exponentially grow your bottom line.
            </span>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Ready;
