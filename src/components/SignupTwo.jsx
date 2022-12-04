import React from "react";

const SignupTwo = ({ state, inputHandle, pre, next }) => {
  return (
    <div>
      <div className="flex flex-col mb-2">
        <label className="text-slate-500" htmlFor="phone">
          Phone
        </label>
        <input
          value={state.phone_number}
          onChange={inputHandle}
          className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
          type="text"
          name="phone_number"
          placeholder="Phone"
          id="phone_number"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="text-slate-500" htmlFor="email">
          Email
        </label>
        <input
          value={state.email}
          onChange={inputHandle}
          className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
          type="text"
          name="email"
          placeholder="Email"
          id="email"
        />
      </div>

      <div className="mt-4 gap-3 flex justify-center items-center">
        <button
          onClick={pre}
          className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignupTwo;
