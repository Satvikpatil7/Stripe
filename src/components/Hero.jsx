import React from "react";
import "../styleSheet/Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoLogoIonic } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen relative flex">
        <div
          className="gradient w-full h-screen absolute -z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 32%, 0 70%)" }}
        ></div>
        <div className="w-[50%] h-[90vh] flex flex-col">
          <div className="h-[12vh] w-[100%] flex items-center ">
            <button className="btn h-[2vh] flex items-center  rounded-full text-sm mt-60 ml-60">
              Invite only
            </button>
          </div>
          <div className="hero h-[45vh] w-[100%] flex  text-8xl text-gray-800 mt-32 ml-60">
            Financial <br />
            infrastructure <br />
            to grow your <br />
            revenue
          </div>
          <div className=" h-[20vh] w-[100%] flex text-xl text-gray-800 ml-60">
            Join the millions of companies of all sizes that use Stripe to{" "}
            <br /> accept payments online and in person, embed financial <br />{" "}
            services, power custom revenue models, and build a more <br />
            profitable business.
          </div>
          <div className=" h-[13vh] w-[100%] flex ">
            <button className="flex items-center h-10 ml-60 rounded-full bg-slate-900 text-slate-50 text-base px-6 py-2 shadow-lg hover:bg-slate-700 transition ease-in-out duration-300">
              Request an invite <FaArrowRight className=" bg-inherit" />
            </button>
          </div>
        </div>
        <div className="h-[90vh] w-[50%] flex relative overflow-hidden  justify-end ">
          <div className="bg-white shadow-md rounded-lg w-[35vh] p-6 absolute mt-8 top-40 left-40">
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src="https://i.pinimg.com/564x/85/45/65/85456542eb5739dea3c8a83c5655c933.jpg"
                alt="Abstraction Magazine"
                className="h-20"
              />
            </div>

            {/* Title and Price */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold">Abstraction Magazine</h2>
              <p className="text-gray-500">₹19 per month</p>
            </div>

            {/* Apple Pay Button */}
            <div className="flex justify-center mb-4">
              <button className="bg-black text-white w-full py-2 rounded-md">
                Apple Pay
              </button>
            </div>

            {/* Divider */}
            <div className="text-center mb-4 text-gray-500">
              Or pay with card
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Card Information Inputs */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Country or Region Select */}
            <div className="mb-4">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option>United States</option>
                {/* Add more options here */}
              </select>
            </div>

            {/* ZIP Code Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="ZIP"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Pay Button */}
            <div className="flex justify-center">
              <button className="bg-black text-white w-full py-2 rounded-md">
                Pay
              </button>
            </div>
          </div>
          <div className="bg-slate-100 h-[65vh] w-[65vh] mt-36 rounded-md flex flex-col">
            <div className="h-[15vh] w-full flex  rounded-md items-center px-4 bg-slate-100">
              <div className="flex text-sm gap-2 items-center font-bold bg-slate-100 mt-3">
                <IoLogoIonic className="bg-inherit bg-slate-200" />
                Rocket Ride{" "}
                <FaChevronDown className="bg-inherit mr-6 bg-slate-100" />
              </div>
              <div className="flex text-sm gap-4 items-center rounded-md border px-2 py-1 mt-3">
                <div className="flex text-sm gap-2 items-center pr-52">
                  <IoSearchOutline />
                  Search
                </div>
              </div>
            </div>

            <div className=" h-[85vh] w-full bg-slate-100 flex justify-end items-center ">
              <div className="h-[95%] w-[70%] bg-white flex flex-col rounded-md shadow-lg p-4 mr-4">
                <div className="h-[55%] w-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Today</h2>
                    <div className="text-sm font-medium">
                      Yesterday: US$2,931,556.34
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-md overflow-hidden">
                    <img
                      src="https://i.pinimg.com/564x/b4/01/f9/b401f9deb4dfa6f1aef8bb226e6a35e3.jpg"
                      alt="Net volume chart"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="h-[45%] w-full flex justify-between mt-4">
                  <div className="h-full w-[48%] bg-white flex flex-col items-center justify-center rounded-md p-4 shadow">
                    <div className="text-center mb-4">
                      <h3 className="text-sm font-semibold">
                        Net Volume from Sales
                      </h3>
                      <p className="text-sm font-bold text-green-400">+32.8%</p>
                    </div>
                    <div className="w-full h-full">
                      <img
                        src="https://i.pinimg.com/564x/78/9c/23/789c23c6e6713091ed180589656c3bda.jpg"
                        alt="Sales chart"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="h-full w-[48%] bg-white flex flex-col items-center justify-center rounded-md p-4 shadow">
                    <div className="text-center mb-4">
                      <h3 className="text-sm font-semibold">New Customers</h3>
                      <p className="text-sm font-bold text-green-400">+32.1%</p>
                    </div>
                    <div className="w-full h-full">
                      <img
                        src="https://i.pinimg.com/564x/78/9c/23/789c23c6e6713091ed180589656c3bda.jpg"
                        alt="Customers chart"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
