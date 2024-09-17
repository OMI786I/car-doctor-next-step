import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full relative mt-12">
      {banners.map((res, index) => (
        <div
          key={res.id}
          id={`slide${res.id}`}
          className="carousel-item relative w-full"
        >
          {/**hero */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("assets/images/banner/${
                index + 1
              }.jpg")`,
            }}
          >
            <div className="hero-content text-neutral-content text-left">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{res.title}</h1>
                <p className="mb-5">{res.description}</p>
                <div className="flex gap-3">
                  <button className="btn btn-primary">Discover More</button>
                  <button className="outline outline-offset-1 outline-white p-2 rounded-md text-white hover:bg-black hover:duration-200 hover:outline-none transition ease-in-out  ">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**hero */}

          {/** Navigation buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 right-5 top-[80%]">
            <a
              href={res.prev}
              className="btn btn-outline btn-primary btn-circle"
            >
              ❮
            </a>
            <a
              href={res.next}
              className="btn btn-outline btn-primary btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const banners = [
  {
    id: 1,
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide2",
    prev: "#slide6",
  },
  {
    id: 2,
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    id: 3,
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    id: 4,
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide5",
    prev: "#slide3",
  },
  {
    id: 5,
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide6",
    prev: "#slide4",
  },
  {
    id: 6,
    title: "Affordable Price for Car Servicing",
    description:
      "Our skilled technicians use the latest tools and genuine parts to ensure your car runs smoothly and safely. From routine oil changes and tire rotations to comprehensive inspections and repairs, we offer a range of services tailored to meet your needs and budget.",
    next: "#slide1",
    prev: "#slide5",
  },
];

export default Banner;
