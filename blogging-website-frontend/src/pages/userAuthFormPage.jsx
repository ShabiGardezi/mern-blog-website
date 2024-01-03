import React from "react";
import InputBox from "./InputBox";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper key={type}>
      <section className="h-cover flex justify-center items-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type == "sign-in" ? "Welcome Back" : "Join us today"}
          </h1>
          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              placeholder="Full Name"
              type="text"
              icon={"fi-rr-user"}
            />
          ) : (
            ""
          )}
          <InputBox
            name="email"
            placeholder="Email"
            type="email"
            icon={"fi-rr-envelope"}
          />
          <InputBox
            name="password"
            placeholder="Password"
            type="password"
            icon={"fi-rr-key"}
          />
          <button className="btn-dark mt-14 center">
            {type.replace("-", " ")}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-[30%] uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} alt="google-icon" className="w-5" />
            continue with google
          </button>
          {type == "sign-in" ? (
            <p className="text-center text-xl test-dark-grey mt-1">
              Don't hasve an account?
              <Link to="/signup" className="underline text-xl text-black ml-1">
                Join us today
              </Link>
            </p>
          ) : (
            <p className="text-center text-dark-grey text-xl mt-1">
              Already a member?
              <Link to="/signin" className="underline text-xl text-black ml-1">
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
