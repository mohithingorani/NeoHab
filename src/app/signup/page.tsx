"use client";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const [option, setOption] = useState<"signup" | "signin">("signin");
  return (
    // 2 column layout
    <div className="grid grid-cols-2 h-screen">
      {/* left column */}
      <div>
        <div className={`flex justify-end flex-col h-full text-white `}>
          <div className="w-[429px] pb-10 pl-20">
            <span className="text-white text-[40px] font-extrabold ">
              Welcome to <br />
            </span>
            <span className="text-white text-[100px] font-extrabold  leading-[83px]">
              Neohab!{" "}
            </span>
            <div className="text-white text-[22px] font-medium font-['Raleway']">
              Your portal to a peaceful mind{" "}
            </div>
            <div className="flex gap-1 pt-10 ">
              <div className="w-6 h-2 bg-white rounded-[10px]" />
              <div className="w-2 h-2 bg-[#669673] rounded-[100px]" />
              <div className="w-2 h-2 bg-[#669673] rounded-[100px]" />
            </div>
          </div>
        </div>
      </div>
      {/* Right Column */}
      <div>
        <div className=" flex justify-end h-full ">
          <div className=" ml-[200px] w-full h-full bg-[#1e1e1e]/25 rounded-tl-[80px] rounded-bl-[80px] backdrop-blur-[150px] pt-[75px] ">
            {/* Top Image */}
            <div className="w-[150px]  h-[60px] bg-[#1e1e1e]/25 rounded-tr-[80px] rounded-br-[80px] backdrop-blur-[100 px] flex justify-end items-center pr-[50px] ">
              <Image src="/logo1.svg" alt="logo" width={40} height={40} />
            </div>

            <div className="w-full  pt-[30px] px-20 ">
              <div className="w-full h-full">
                {/* SignUp or Signin Option */}
                <div className="w-full h-[50px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] p-[6px] flex justify-evenly gap-2 text-xl text-white">
                  <button
                    onClick={() => setOption("signup")}
                    className={`${option=="signup"?"bg-[#13463D]":"bg-transparent"} w-full  rounded-lg  flex justify-center items-center font-extrabold`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setOption("signin")}
                    className={` ${option=="signin"?"bg-[#13463D]":"bg-transparent"} w-full  rounded-lg flex justify-center items-center `}
                  >
                    Sign In
                  </button>
                </div>
                {/* SignUp Form */}
                <div>
                  {option === "signup" && (
                    <div>
                      <div className={` text-white text-lg pt-5`}>Email Id</div>
                      <input className="w-full h-[40px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] py-[6px] px-[12px] text-white mt-2 border border-slate-500" />
                      <div className={` text-white text-lg pt-2`}>Password</div>

                      <input className="w-full h-[40px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] py-[6px] px-[12px] text-white mt-2 border border-slate-500" />
                      <div
                        className={`text-white text-xs font-medium leading-3  flex flex-col gap-1 pt-4`}
                      >
                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/check.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />

                          <div>Strength : Weak</div>
                        </div>

                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/check.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          Cannot contain your name or email address
                        </div>

                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/check.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          At least 8 characters
                        </div>

                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/check.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          Contains a number or symbol
                        </div>
                      </div>
                      <div className="flex justify-center w-full items-center pt-4">
                        <button
                          className={`w-full h-[50.95px] px-[21.23px] py-[10.61px] bg-[#13463d] hover:bg-black/20 rounded-lg justify-center items-center gap-[8.49px] inline-flex`}
                        >
                          <div
                            className={`text-white text-[16.98px] font-bold  `}
                          >
                            Create Account
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                  {option === "signin" &&
                    <div>
                      <div>
                        <div className={` text-white text-lg pt-5`}>
                          Email Id
                        </div>
                        <input className="w-full h-[40px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] py-[6px] px-[12px] text-white mt-2 border border-slate-500" />
                        <div className={` text-white text-lg pt-2`}>
                          Password
                        </div>

                        <input className="w-full h-[40px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] py-[6px] px-[12px] text-white mt-2 border border-slate-500" />

                        <div className="flex justify-center  items-center pt-4 w-full">
                          <button
                            className={`w-full hover:bg-black/20 h-[50.95px] px-[21.23px] py-[10.61px] bg-[#13463d] rounded-lg justify-center items-center gap-[8.49px] inline-flex`}
                          >
                            <div
                              className={`text-white text-[16.98px] font-bold   `}
                            >
                              Sign In
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                  <div className="">
                    <div
                      className={`flex justify-center w-full items-center pt-4 gap-2 text-white text-xs`}
                    >
                      <Image
                        src="/Line 2.svg"
                        alt="line"
                        width={50}
                        height={50}
                      />
                      <div className={``}>OR</div>
                      <Image
                        src="/Line 2.svg"
                        alt="line"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex gap-4 w-full justify-center items-center pt-4">
                      <button className="w-[118.88px] h-[50.95px]  bg-[#1e1e1e]/25 hover:bg-black/30 rounded-lg border border-[#bcc0d5]/40 backdrop-blur-[100px] justify-center items-center  flex">
                        <Image
                          src="/google.svg"
                          alt="google"
                          width={36}
                          height={36}
                        />
                      </button>
                      <button className="w-[118.88px] h-[50.95px]  bg-[#1e1e1e]/25 rounded-lg border hover:bg-black/30 border-[#bcc0d5]/40 backdrop-blur-[100px] justify-center items-center gap-[16.98px] flex ">
                        <Image
                          src="/apple.svg"
                          alt="google"
                          width={28}
                          height={28}
                        />
                      </button>
                      <button className="w-[118.88px] h-[50.95px] px-[21.23px] py-[10.61px] bg-[#1e1e1e]/25 hover:bg-black/30 rounded-lg border border-[#bcc0d5]/40 backdrop-blur-[100px] justify-center items-center gap-[16.98px] inline-flex">
                        <Image
                          src="/microsoft.svg"
                          alt="google"
                          width={28}
                          height={28}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
