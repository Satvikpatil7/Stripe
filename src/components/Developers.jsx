import React from "react";

const Resources = () => {
  return (
    <>
      <div className="w-full h-screen relative">
      <div className="triangle bg-zinc-50 h-5 w-4 absolute left-[40.2%] top-0" style={{ clipPath: 'polygon(50% 0%, 0 47%, 100% 47%)' }}></div>
        <div className="w-[65vh] h-[42vh] bg-white border-solid border-4 border-zinc-50 absolute left-[36%] top-2 rounded-lg  pt-7">
          <div className="text-zinc-700 h-[70%] pl-10 px-3">
            <h1 className="text-sm font-medium">Documentation</h1>
            <h1 className="text-sm font-light">Start integrating Stripe's products and tools</h1>
            <div className="flex w-full mt-7">
                <div className="w-[50%]">
                    <h1 className="text-sm font-semibold">GET STARTED</h1>
                    <h1 className="text-sm mt-2">Pre-built checkout</h1>
                    <h1 className="text-sm mt-2">Libraries and SDKs</h1>
                    <h1 className="text-sm mt-2">App integrations</h1>
                    <h1 className="text-sm mt-2">Code samples</h1>
                </div>
                <div className="w-[50%] bg-">
                    <h1 className="text-sm font-semibold">GUIDES</h1>
                    <h1 className="text-sm mt-2">Accept online payments</h1>
                    <h1 className="text-sm mt-2">Manage subscriptions</h1>
                    <h1 className="text-sm mt-2">Send payments</h1>
                    <h1 className="text-sm mt-2">Set up in-person payments</h1>
                </div>
            </div>
          </div>
          <div className="text-zinc-700 h-[30%] pl-10 bg-[#EFF3F9]  rounded-b-lg flex ">
          <div className="w-[50%] mt-7">
            <h1 className="text-sm font-medium">Full API reference</h1>
            <h1 className="text-sm font-medium mt-3">API status</h1>
          </div>
          <div className="w-[50%] mt-7">
            <h1 className="text-sm font-medium">API changelog</h1>
            <h1 className="text-sm font-medium mt-3">Build on Stripe Apps</h1>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
