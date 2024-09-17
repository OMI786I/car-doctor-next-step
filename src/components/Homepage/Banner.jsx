import React from "react";

const Banner = () => {
  return (
    <div className="carousel relative w-full">
      <div id="slide1" className="carousel-item relative w-full">
        {/**hero */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      {/**hero */}
      <div className="absolute inset-x-0 bottom-4 flex justify-end">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle ml-4">
          ❯
        </a>
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide2",
    prev: "#slide6",
  },
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide5",
    prev: "#slide3",
  },
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide6",
    prev: "#slide4",
  },
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide1",
    prev: "#slide4",
  },
  {
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide2",
    prev: "#slide4",
  },
];

export default Banner;
