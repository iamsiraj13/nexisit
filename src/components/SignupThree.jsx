import React from "react";

const SignupThree = ({ state, inputHandle, finalSubmit, pre }) => {
  return (
    <div>
      <div className="flex flex-col mb-2">
        <label htmlFor="password">Password</label>
        <input
          value={state.password}
          onChange={inputHandle}
          className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="text"
          name="password"
          placeholder="Password"
          id="password"
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
          onClick={finalSubmit}
          className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignupThree;
