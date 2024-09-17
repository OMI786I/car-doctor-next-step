import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      {/**images */}
      <div>
        <div className="relative">
          <img
            className="w-[500px] h-[400px] "
            src="assets/images/about_us/person.jpg"
          ></img>
          <img
            className="absolute -bottom-5 left-[400px] w-[260px] h-[250px] border-4 border-white rounded-lg"
            src="assets/images/about_us/parts.jpg"
          ></img>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
