import React from "react";
import { FaAtlassian } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const Hero4 = () => {
  return (
    <div className="h-[120vh] w-full absolute flex">
      <div className="w-[27%] h-[47%] bg-white relative top-80 left-1/4 shadow-lg rounded-lg flex flex-col">
        <div className="w-full h-[55%] rounded-lg border-4 border-white bg-slate-200 overflow-hidden absolute hover:bg-gradient-to-r from-orange-50 via-yellow-200 to-amber-50">
          <div className="w-[89%] h-[80%] bg-white mt-14 ml-16">
            <img
              src="https://i.postimg.cc/9fR8Pd54/Screenshot-2024-07-12-145227.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[45%] flex flex-col space-y-4 p-4 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-200 rounded-lg flex items-center p-2 space-x-2">
              <FaAtlassian />
              <span className="font-semibold">Atlas</span>
            </div>
          </div>
          <div className="text-2xl font-medium">Incorporate your company</div>
          <div className="text-lg font-medium text-slate-500">
            Form a legal entity, issue stock, and start <br /> accepting
            payments.
          </div>
          <div className="font-semibold text-fuchsia-600 opacity-0 transition-opacity duration-300 hover:opacity-100">
            Learn about Atlas
          </div>
        </div>
      </div>

      <div className="w-[27%] h-[47%] bg-white relative top-48 left-1/4 ml-10 shadow-lg rounded-lg flex flex-col">
        <div className="w-full h-[55%] rounded-lg  border-4 border-white bg-slate-200 overflow-hidden absolute hover:bg-gradient-to-r from-blue-50 via-teal-200   to-indigo-50">
          <div className="w-[47%] h-[70%] bg-white absolute mt-16 ml-60 rounded-lg">
            <img
              src="https://i.postimg.cc/3rcrFkLM/Screenshot-2024-07-12-215353.png"
              alt=""
            />
          </div>
          <div className="w-[47%] h-[70%] bg-white absolute rounded-lg">
            <img
              src="https://i.postimg.cc/3rcrFkLM/Screenshot-2024-07-12-215353.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[45%] flex flex-col space-y-4 p-4 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-200 rounded-lg flex items-center p-2 space-x-2">
              <RiSecurePaymentLine />
              <span className="font-semibold">Payment Links</span>
            </div>
          </div>
          <div className="text-2xl font-medium">Validate your idea</div>
          <div className="text-lg font-medium text-slate-500">
            Test your product idea by launching payments <br /> with little to
            no code.
          </div>
          <div className="font-semibold text-fuchsia-600 opacity-0 transition-opacity duration-300 hover:opacity-100">
            Try Payment Links
          </div>
        </div>
      </div>
      <div className="w-[27%] h-[47%] bg-white relative top-2/3 ml-4 shadow-lg rounded-lg flex flex-col">
        <div className="w-full h-[55%] rounded-lg border-4 border-white bg-slate-200 overflow-hidden absolute hover:bg-gradient-to-r from-lime-50 via-green-200 to-yellow-50">
          <div className="w-[80%] h-[75%] bg-white mt-10 ml-12 rounded-lg">
            <img
              src="https://i.postimg.cc/Ghb4zd5P/Screenshot-2024-07-12-222027.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[45%] flex flex-col space-y-4 p-4 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-200 rounded-lg flex items-center p-2 space-x-2">
              <MdOutlineInsertPageBreak />
              <span className="font-semibold">Invoicing</span>
            </div>
          </div>
          <div className="text-2xl font-medium">Sell to businesses</div>
          <div className="text-lg font-medium text-slate-500">
            Launch a B2B business and collect one-time or <br />
            recurring payments from customers.
          </div>
          <div className="font-semibold text-fuchsia-600 opacity-0 transition-opacity duration-300 hover:opacity-100">
            Explore Invoicing
          </div>
        </div>
      </div>
      <div className="w-[27%] h-[47%] bg-white relative top-3/4 mt-10 right-1/2 mr-6 shadow-lg rounded-lg flex flex-col">
        <div className="w-full h-[55%] rounded-lg border-4 border-white bg-slate-200 overflow-hidden absolute hover:bg-gradient-to-r from-pink-50 via-fuchsia-200 to-rose-50">
          <div className="w-[89%] h-[80%] bg-white mt-14 ml-16">
            <img
              src="https://i.postimg.cc/6pcHmWcd/Screenshot-2024-07-12-222905.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[45%] flex flex-col space-y-4 p-4 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-200 rounded-lg flex items-center p-2 space-x-2">
            <MdOutlineShoppingCartCheckout />
              <span className="font-semibold">Checkout</span>
            </div>
          </div>
          <div className="text-2xl font-medium">Sell to consumers</div>
          <div className="text-lg font-medium text-slate-500">
            Launch a B2C business with a prebuilt payment <br />
            page that’s optimized for conversion.
          </div>
          <div className="font-semibold text-fuchsia-600 opacity-0 transition-opacity duration-300 hover:opacity-100">
            Start with Checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
