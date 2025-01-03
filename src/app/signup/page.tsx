import Image from "next/image";
import { gothamFont, gothamFontLight } from "./layout";

export default function SignUp() {
  return (
    <div className="grid grid-cols-2 h-full">
      <div>
        <div
          className={`flex justify-end flex-col h-full text-white ${gothamFont.className}`}
        >
          <div className="w-[429px] pb-10 pl-20">
            <span className="text-white text-[40px] font-bold ">
              Welcome to <br />
            </span>
            <span className="text-white text-[100px] font-bold  leading-[83px]">
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
      <div>
        <div className=" flex justify-end h-full w-full">
          <div className=" ml-36 w-full h-full bg-[#1e1e1e]/25 rounded-tl-[80px] rounded-bl-[80px] backdrop-blur-[150px] ">
            <div className="w-[281px] mt-[80px] h-[101px] bg-[#1e1e1e]/25 rounded-tr-[80px] rounded-br-[80px] backdrop-blur-[100 px] flex justify-end items-center pr-[50px] ">
              <Image src="/logo1.svg" alt="logo" width={70} height={53} />
            </div>
            <div className="w-full h-full pt-[30px] px-24 ">
              <div className="w-full h-full">
                <div className="w-full h-[50px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] p-[6px] flex justify-evenly gap-2 text-xl text-white">
                  <button
                    className={`bg-[#13463D] w-full h-full rounded-lg ${gothamFont.className} flex justify-center items-center`}
                  >
                    Sign Up
                  </button>
                  <button
                    className={` bg-transparent w-full h-full rounded-lg flex justify-center items-center ${gothamFontLight.className}`}
                  >
                    Sign In
                  </button>
                </div>
                <div
                  className={`${gothamFont.className} text-white text-lg pt-5`}
                >
                  Email Id
                </div>
                <input className="w-full h-[50px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] py-[6px] px-[12px] text-white mt-2 border border-slate-500" />
                <div
                  className={`${gothamFont.className} text-white text-lg pt-2`}
                >
                  Password
                </div>

                <input className="w-full h-[50px] bg-[#1e1e1e]/25 rounded-lg backdrop-blur-[15 px] py-[6px] px-[12px] text-white mt-2 border border-slate-500" />
                <div
                  className={`text-[#b7b7b7] text-xs font-medium leading-3 ${gothamFontLight.className} flex flex-col gap-2 pt-4`}
                >
                  <div className="flex justify-start gap-2 items-center">
                    <Image
                      src="/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />

                    <div>Password Strength : Weak</div>
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
                    className={`w-[378.94px] h-[50.95px] px-[21.23px] py-[10.61px] bg-[#13463d] rounded-lg justify-center items-center gap-[8.49px] inline-flex`}
                  >
                    <div
                      className={`text-white text-[16.98px] font-bold  ${gothamFont.className}`}
                    >
                      Create Account
                    </div>
                  </button>
                </div>
                <div
                  className={`flex justify-center w-full items-center pt-4 gap-2 text-white text-xs`}
                >
                  <Image src="/Line 2.svg" alt="line" width={50} height={50} />
                  <div className={`${gothamFont.className}`}>OR</div>
                  <Image src="/Line 2.svg" alt="line" width={50} height={50} />
                </div>
                <div className="flex gap-4 w-full justify-center items-center pt-2">
                  <div className="w-[118.88px] h-[50.95px]  bg-[#1e1e1e]/25 rounded-lg border border-[#bcc0d5]/40 backdrop-blur-[100px] justify-center items-center  flex">
                    <Image
                      src="/google.svg"
                      alt="google"
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="w-[118.88px] h-[50.95px]  bg-[#1e1e1e]/25 rounded-lg border border-[#bcc0d5]/40 backdrop-blur-[100px] justify-center items-center gap-[16.98px] flex ">
                    <Image
                      src="/apple.svg"
                      alt="google"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-[118.88px] h-[50.95px] px-[21.23px] py-[10.61px] bg-[#1e1e1e]/25 rounded-lg border border-[#bcc0d5]/40 backdrop-blur-[100px] justify-center items-center gap-[16.98px] inline-flex">
                    <Image
                      src="/microsoft.svg"
                      alt="google"
                      width={28}
                      height={28}
                    />
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
