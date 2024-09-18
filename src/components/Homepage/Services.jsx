import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { services } from "../../lib/services.js";
const Services = () => {
  console.log(services);

  return (
    <div>
      <div className="text-center space-y-4 mt-12">
        <h1 className="text-primary font-bold">Service</h1>
        <h1 className="text-2xl font-bold">Our Service Area</h1>
        <p className="text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      {/**cards */}

      <div className="grid grid-cols-3 gap-3 mt-8">
        {services.map((res) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={res._id}>
            <figure className="px-10 pt-10">
              <img src={res.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{res.title}</h2>

              <div className="flex items-center">
                {" "}
                <p className="text-primary font-bold">Price:${res.price}</p>
                <button className="btn  btn-ghost text-primary">
                  <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {" "}
        <button className="btn btn-outline btn-primary my-8 ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
