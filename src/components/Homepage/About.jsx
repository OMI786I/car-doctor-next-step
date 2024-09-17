import React from "react";

const About = () => {
  return (
    <div className="mt-20 flex gap-10 lg:gap-60 ">
      {/**images */}
      <div className="w-1/2">
        <div className="relative">
          <img
            className="w-[600px] h-[400px] "
            src="assets/images/about_us/person.jpg"
          ></img>
          <img
            className="absolute -bottom-5  md:left-[100px] lg:left-[300px] w-[260px] h-[250px] border-4 border-white rounded-lg"
            src="assets/images/about_us/parts.jpg"
          ></img>
        </div>
      </div>
      {/**text */}
      <div className="w-1/2">
        <h1 className="text-primary font-bold">About Us</h1>
        <h1 className="text-3xl font-bold">
          We are qualified & of experience in this field
        </h1>
        <p className="text-gray-500 mt-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="text-gray-500 mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="mt-12 btn btn-primary">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
