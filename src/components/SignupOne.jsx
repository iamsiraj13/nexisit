import React from "react";

const SignupOne = ({ state, inputHandle, next }) => {
  return (
    <div className="lg:mx-16">
      <div className="flex flex-col mb-2 ">
        <input
          value={state.first_name}
          onChange={inputHandle}
          className="p-2 border-b border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="text"
          name="first_name"
          placeholder="First Name"
          id="first_name"
        />
      </div>
      <div className="flex flex-col mb-4">
        <input
          value={state.last_name}
          onChange={inputHandle}
          className="p-2 border-b border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="text"
          name="last_name"
          placeholder="Last Name"
          id="last_name"
        />
      </div>

      <div className="mt-6 flex justify-center items-center">
        <button
          onClick={next}
          className="px-3 py-2 text-lg rounded-lg text-white bg-blue-500"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SignupOne;
