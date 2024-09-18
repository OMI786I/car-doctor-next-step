"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const page = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [showPassWord2, setShowPassWord2] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="grid grid-cols-2 justify-center items-center">
      {/**image */}

      <Image
        alt="login"
        src="assets/images/login/login.svg"
        height={400}
        width={300}
      />

      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2">
            <h1 className="font-bold text-3xl text-center">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <select
                  {...register("blood", { required: true })}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="">Select a blood Group</option>
                  <option value={"A+"}>A+</option>
                  <option value={"A-"}>A-</option>
                  <option value={"B+"}>B+</option>
                  <option value={"B-"}>B-</option>
                  <option value={"O+"}>O+</option>
                  <option value={"O-"}>O-</option>
                  <option value={"AB+"}>AB+</option>
                  <option value={"AB-"}>AB-</option>
                </select>
                {errors.blood && (
                  <span className="text-red-600">Blood group is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassWord ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Password"
                    className="input input-bordered"
                    name="password"
                  />
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => setShowPassWord(!showPassWord)}
                  >
                    {showPassWord ? (
                      <FaRegEye></FaRegEye>
                    ) : (
                      <FaRegEyeSlash></FaRegEyeSlash>
                    )}
                  </span>
                </div>

                {errors.password && errors.password.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one upper case, one lower case, one
                    number, and one special character
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassWord2 ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    name="confirmPassword"
                  />
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => setShowPassWord2(!showPassWord2)}
                  >
                    {showPassWord2 ? (
                      <FaRegEye></FaRegEye>
                    ) : (
                      <FaRegEyeSlash></FaRegEyeSlash>
                    )}
                  </span>
                </div>

                {errors.confirmPassword && (
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-neutral"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="m-4">
              <small>
                Already have an account?{" "}
                <a className="text-blue-700 underline font-bold" to={"/login"}>
                  Log in
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
