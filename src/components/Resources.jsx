import React from "react";

const Resources = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <div
          className="triangle bg-zinc-50 h-5 w-4 absolute left-[46.3%] top-0"
          style={{ clipPath: "polygon(50% 0%, 0 47%, 100% 47%)" }}
        ></div>
        <div className="w-[58vh] h-[33vh] text-zinc-700  bg-white border-solid border-4 border-zinc-50 absolute left-[36%] top-2 rounded-lg  pt-3">
          <div className="h-[60%] px-2 flex">
            <div className="pl-10 pt-5 w-[50%]">
              <h1 className="text-[0.9rem] font-medium">Support centre</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Support plans</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Guides</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Customer stories</h1>
            </div>
            <div className="pl-10 pt-5">
              <h1 className="text-[0.9rem] font-medium">Blog</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Sessions</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Contact sales</h1>
            </div>
          </div>
          <div className="bg-[#EFF3F9] rounded-b-lg h-[40%] w-full flex pt-3 px-2">
          <div className="pl-10 pt-5 w-[50%]">
              <h1 className="text-[0.9rem] font-medium">Jobs</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Newsroom</h1>
            </div>
            <div className="pl-10 pt-5">
              <h1 className="text-[0.9rem] font-medium">Stripe Press</h1>
              <h1 className="text-[0.9rem] font-medium mt-3">Become a partner</h1>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Resources;
