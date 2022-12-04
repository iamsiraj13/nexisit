import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import signupImg from "../assets/images/feature.png";
import logo from "../assets/images/logo.png";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const finalSubmit = async () => {
    try {
      if (state.password <= 8) {
        toast.warning("Password Cannot be lest than 8");
      } else {
        if (state.password && state.email) {
          const result = await axios.post(
            "https://test.nexisltd.com/login",
            state
          );
          console.log(result);
          toast.success(result?.data?.success);
          window.location.href = "/attendence";
        }
      }
    } catch (error) {
      toast.error(error.data);
      //   console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen  bg-white  lg:px-20 sm:flex justify-center">
      <ToastContainer />

      <div className="mt-20 sm:w-2/3 ">
        <div>
          <img src={logo} alt="" />
        </div>
        <img src={signupImg} alt="" className="hidden sm:block " />
      </div>
      <div className="card md:m-5 lg:w-1/3  rounded-md shadow-xl bg-white p-5">
        <h2 className="mb-24 text-center text-xl font-bold">Login Form</h2>
        <div className="lg:mx-16">
          <div className="flex flex-col mb-2 ">
            <input
              value={state.email}
              onChange={inputHandle}
              className="p-2 border-b border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="text"
              name="email"
              placeholder="E-mail Address"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              value={state.password}
              onChange={inputHandle}
              className="p-2 border-b border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="text"
              name="password"
              placeholder="Password"
              id="password"
            />
          </div>

          <div className="mt-6 flex justify-center items-center">
            <button
              onClick={finalSubmit}
              className="px-3 py-2 text-lg rounded-lg text-white bg-blue-500"
            >
              Login
            </button>
          </div>
          <div className="mt-6">
            <p className="text-right mr-4 text-slate-500 ">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                SIGNUP HERE
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
