import React, { Component } from "react";
import Card from "./card";

class How extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCards: 3,
    };
  }

  render() {
    const { numCards } = this.state;
    const cards = Array.from({ length: numCards }, (_, index) => (
      <Card key={index} />
    ));

    return (
      <>
        <div className="bg-white-500 text-center p-8 shadow-md my-4">
          <h1 className="text-2xl font-medium text-gray-500">Here You Can See</h1>
          <div className="flex justify-center gap-2">
            <h1 className="text-5xl font-bold text-black">How It</h1>
            <h1 className="text-5xl text-blue-600 font-normal"> Works?</h1>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-20 mr-15 mb-10 ml-15">
            <div className="bg-white justify-center">
              <img
                className="w-32 h-32 rounded-full mx-40"
                src="../src/assets/account.png"
                alt=""
              />
              <h1 className="text-lg font-bold mt-5 ml-37">Create An Account</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatum corporis sunt quia, aliquam earum quis nam sit
                architecto asperiores! Accusantium ea voluptate quis, iusto nisi
                odit accusamus vero totam?
              </h1>
            </div>
            <div className="bg-white justify-center">
              <img
                className="w-32 h-32 rounded-full mx-40"
                src="../src/assets/tie.png"
                alt=""
              />
              <h1 className="text-lg font-bold mt-5 ml-39">Search Desired Job</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatum corporis sunt quia, aliquam earum quis nam sit
                architecto asperiores! Accusantium ea voluptate quis, iusto nisi
                odit accusamus vero totam?
              </h1>
            </div>
            <div className="bg-white justify-center">
              <img
                className="w-32 h-32 rounded-full mx-40"
                src="../src/assets/doc.png"
                alt=""
              />
              <h1 className="text-lg font-bold mt-5 ml-39">Send Your Resume</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatum corporis sunt quia, aliquam earum quis nam sit
                architecto asperiores! Accusantium ea voluptate quis, iusto nisi
                odit accusamus vero totam?
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white-500 text-center p-8 shadow-md my-4">
          <h1 className="text-2xl font-medium text-gray-500">Here You Can See</h1>
          <div className="flex justify-center gap-2">
            <h1 className="text-5xl font-bold text-black">Featured</h1>
            <h1 className="text-5xl text-blue-600 font-normal"> Jobs</h1>
          </div>
          {cards}
        </div>
      </>
    );
  }
}

export default How;
