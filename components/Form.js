import React from "react";
import Button from "./Button";

const Form = ({ classes }) => {
  return (
    <div className={classes}>
      <div className="bg-white px-6 py-6 rounded-lg shadow-2xl shadow-slate-300">
        <form action="">
          <div className="flex flex-col mb-4">
            <label className="pb-2 text-slate-600" htmlFor="user-name">
              Name
            </label>
            <input
              className="border-2 p-2 rounded-lg  border-slate-300 focus:outline-none focus:border-blue-400 focus:border-2"
              type="text"
              id="user-name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="pb-2 text-slate-600" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 p-2 rounded-lg  border-slate-300 focus:outline-none focus:border-blue-400 focus:border-2"
              type="text"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="pb-2 text-slate-600" htmlFor="subject">
              Subject
            </label>
            <input
              className="border-2 p-2 rounded-lg  border-slate-300 focus:outline-none focus:border-blue-400 focus:border-2"
              type="text"
              id="subject"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="pb-2 text-slate-600" htmlFor="message">
              Message
            </label>
            <textarea
              className="border-2 p-2 rounded-lg  border-slate-300 focus:outline-none focus:border-blue-400 focus:border-2"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <Button
            classes="bg-blue-900 text-white text-lg mt-5 px-8 py-3 rounded-md"
            type="submit"
            title="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
