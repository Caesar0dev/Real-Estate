import React from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import Radio from "@/shared/Radio/Radio";

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp = () => {
  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-10 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                First Name
              </span>
              <Input type="text" placeholder="James" className="mt-1" />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Last Name
              </span>
              <Input type="text" placeholder="Butt" className="mt-1" />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                User Name
              </span>
              <Input type="text" placeholder="HappyInvestor" className="mt-1" />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type="password" className="mt-1" />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Confirm Password
              </span>
              <Input type="password" className="mt-1" />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                ARE YOU A RESIDENT OR CITIZEN OF THE UNITED STATES OR ITS TERRITORIES?
              </span>
              <div className="flex justify-center ">
                <Radio
                  id={"Yes"}
                  key={"Yes"}
                  name="radioNameSort"
                  label={"Yes"}
                  defaultChecked={true}
                  sizeClassName="w-5 h-5"
                  // onChange={}
                  className="!text-sm mx-5"
                />
                <Radio
                  id={"No"}
                  key={"No"}
                  name="radioNameSort"
                  label={"No"}
                  defaultChecked={true}
                  sizeClassName="w-5 h-5"
                  // onChange={}
                  className="!text-sm mx-5"
                />
              </div>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                ARE YOU REGISTERING TO INVEST AS A BUSINESS ACCOUNT?
              </span>
              <div className="flex justify-center ">
                <Radio
                  id={"Yes"}
                  key={"Yes"}
                  name="radioNameSort"
                  label={"Yes"}
                  defaultChecked={true}
                  sizeClassName="w-5 h-5"
                  // onChange={}
                  className="!text-sm mx-5"
                />
                <Radio
                  id={"No"}
                  key={"No"}
                  name="radioNameSort"
                  label={"No"}
                  defaultChecked={true}
                  sizeClassName="w-5 h-5"
                  // onChange={}
                  className="!text-sm mx-5"
                />
              </div>
            </label>
            <ButtonPrimary>Continue</ButtonPrimary>
          </form>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  sizes="40px"
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div> */}
          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link className="text-green-600" href="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
