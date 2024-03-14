import React, { useState } from "react";
import GAButtons from "./GAButtons";
import FloatingInput from "./FloatingInput";

const SignUp = () => {
  const [submit, setSubmit] = useState(false);

  const validateEmail = (email) => {
    var re = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+)\.([a-z A-Z]{2,6})$/;
    return re.test(email);
  };

  return (
    <div className="flex w-screen h-screen bg-slate-500">
      <div className="flex flex-col justify-between xs:w-[528px] xs:h-[640px] w-screen h-screen bg-[#1B2426] rounded-2xl m-auto">
        <div className="flex flex-col">
          <div className="flex justify-end px-[24px] pt-[24px] pb-[8px] bg-[#1B2426] rounded-2xl">
            <div className="flex w-[32px] h-[32px] bg-[#1B2426]">
              <button className="w-[32px] h-[32px] bg-slate-500 hover:bg-slate-200 rounded-2xl">
                <span className="flex justify-center align-middle">
                  <svg
                    rpl=""
                    fill="white"
                    height="16"
                    icon-name="close-outline"
                    viewBox="0 0 20 20"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="sm:w-[500px] sm:h-120 px-[16px] sm:px-[64px] w-full bg-[#1B2426]">
              <h1 className="text-[24px] leading-[32px] h-[28px] text-white font-bold mb-[8px]">
                SignUp
              </h1>
              <p className="text-[14px] my-[8px] h-[40px] text-white">
                By continuing, you agree to our{" "}
                <a
                  className="text-blue-300 no-underline"
                  target="_blank"
                  href="https://www.redditinc.com/policies/user-agreement"
                >
                  User Agreement
                </a>{" "}
                and acknowledge that you understand the{" "}
                <a
                  className="text-blue-300 no-underline"
                  target="_blank"
                  href="https://www.redditinc.com/policies/privacy-policy"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <div className="md:h-[89.600px] w-full mt-[16px]">
                <GAButtons />
              </div>

              <div className="flex flex-row my-[24px] sm:h-[16px] w-full">
                <hr className="w-full h-[1px] bg-[#D7DFE2] self-center"></hr>
                <span className="text-[12px] px-[16px] w-[48px] h-[16px]">
                  OR
                </span>
                <hr className="w-full h-[1px] bg-[#D7DFE2] self-center"></hr>
              </div>

              <div>
                <div className="mb-[16px]">
                  <FloatingInput
                    id={"signup_email"}
                    label="Email"
                    validateInput={validateEmail}
                    setSubmitState={setSubmit}
                  />
                </div>
              </div>

              <div className="text-[14px] text-[#FFFFFF]">
                Already a redditor? <a className="text-blue-300">Log In</a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[528px] md:h-[96px] w-full px-[30px] py-[15px] md:px-[80px] md:py-[24px] flex items-center bg-[#1B2426] rounded-2xl">
          <button className="w-[400px] h-[48px] px-[14px] items-center justify-center inline-flex mx-auto rounded-3xl bg-slate-800">
            <span className="flex items-center justify-center">
              <span className="flex items-center gap-[8px] text-[14px] font-[600] text-white text-opacity-25">
                Log In
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
