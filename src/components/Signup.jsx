import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SignupOne from "./SignupOne";
import SignupThree from "./SignupThree";
import SignupTwo from "./SignupTwo";
import signupImg from "../assets/images/feature.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && state.first_name && state.last_name) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && state.phone_number && state.email) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fillup all input field");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = async () => {
    try {
      if (state.password) {
        const result = await axios.post(
          "https://test.nexisltd.com/signup",
          state
        );
        console.log(result);
        window.location.href = "/";
        toast.success("Registration Successfull");
      }
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
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
        <h2 className="mb-24 text-center text-xl font-bold">Sign Up</h2>
        {formNo === 1 && (
          <SignupOne state={state} inputHandle={inputHandle} next={next} />
        )}

        {formNo === 2 && (
          <SignupTwo
            state={state}
            inputHandle={inputHandle}
            next={next}
            pre={pre}
          />
        )}

        {formNo === 3 && (
          <SignupThree
            state={state}
            inputHandle={inputHandle}
            pre={pre}
            finalSubmit={finalSubmit}
          />
        )}
        <div className="mt-6">
          <p className="text-right mr-4 text-slate-500 ">
            Already have an account?{" "}
            <Link to="/" className="text-blue-700 font-bold">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
