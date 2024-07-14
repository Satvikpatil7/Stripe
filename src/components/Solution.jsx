import React from "react";

const Solution = () => {
  return (
    <>
      <div className="w-full h-screen relative">
      <div className="triangle bg-zinc-50 h-5 w-4 absolute left-[34.5%] top-0" style={{ clipPath: 'polygon(50% 0%, 0 47%, 100% 47%)' }}></div>
        <div className="w-[65vh] h-4/6 bg-white absolute border-solid border-4 border-zinc-50 left-[29%] top-2 rounded-lg px-3 py-7">
          <div className="text-zinc-700 h-[18%]">
            <h1 className="text-sm font-medium pl-4">BY STAGE</h1>
            <div className="pl-[5vh] mt-4 flex">
              <h1 className="w-[50%] text-sm font-medium">Enterprises</h1>
              <h1 className="w-[50%] text-sm font-medium">Start-ups</h1>
            </div>
            <hr className="mt-5" />
          </div>
          <div className="text-zinc-700 h-[24%]">
            <h1 className="text-sm font-medium pl-4">BY BUSINESS MODEL</h1>
            <div className="pl-[5vh] mt-4 flex">
              <div className="w-[50%]">
                <h1 className="text-sm font-medium">E-commerce</h1>
                <h1 className="text-sm font-medium mt-4">SaaS</h1>
              </div>
              <div className="w-[50%]">
                <h1 className="text-sm font-medium">Platforms</h1>
                <h1 className="text-sm font-medium mt-4">Marketplaces</h1>
              </div>
            </div>
            <hr className="mt-8" />
          </div>
          <div className="text-zinc-700 h-[33%]">
            <h1 className="text-sm font-medium pl-4 mt-6">BY USE CASE</h1>
            <div className="pl-[5vh] mt-4 flex">
              <div className="w-[50%]">
                <h1 className="text-sm font-medium">Finance automation</h1>
                <h1 className="text-sm font-medium mt-4">Embedded finance</h1>
                <h1 className="text-sm font-medium mt-4">Global businesses</h1>
              </div>
              <div className="w-[50%]">
                <h1 className="text-sm font-medium">Crypto</h1>
                <h1 className="text-sm font-medium mt-4">Creator economy</h1>
              </div>
            </div>
            <hr className="mt-8" />
          </div>
          <div className="text-zinc-700 h-[25%]">
            <h1 className="text-sm font-medium pl-4">ECOSYSTEM</h1>
            <div className="pl-[5vh] mt-4 flex">
              <div className="w-[50%]">
                <h1 className="text-sm font-medium">Stripe App Marketplace</h1>
                <h1 className="text-sm font-medium mt-4">Partners</h1>
              </div>
              <div className="w-[50%]">
                <h1 className="text-sm font-medium">Professional services</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
