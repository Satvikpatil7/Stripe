import React from "react";

const Hero3 = () => {
  return (
    <div className="w-full h-screen relative flex">
      <div
        className="bg-[#0A2540] w-full h-screen absolute -z-10"
        style={{
          clipPath: "polygon(0 31%, 100% 10%, 100% 100%, 0% 100%)",
          backgroundImage: "url(https://i.postimg.cc/DfRR5jZ7/download.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[60%] h-[60%] absolute top-80 left-80 flex  flex-col">
        <div className="w-[50%] h-[70%] flex flex-col items-center justify-center">
          <div className="w-full h-[20%] text-cyan-300 font-bold text-xl flex items-center">
            Global scale
          </div>
          <div className="w-full h-[40%] text-white font-bold text-5xl flex items-center">
            The backbone for <br /> global commerce
          </div>
          <div className="w-full h-[40%] text-gray-300 flex items-center">
            Stripe makes moving money as easy and <br />
            programmable as moving data. Our teams are <br />
            based in offices around the world and we process <br />
            hundreds of billions of dollars each year for <br />
            ambitious businesses of all sizes.
          </div>
        </div>

        <div className="w-full h-[30%] flex justify-between mt-20">
          <div className="flex flex-col text-white ">
            <div className="text-2xl font-bold">500M+</div>
            <div className="text-slate-200">
              API requests per day, peaking at 13,000 requests a second.
            </div>
          </div>
          <div className="flex flex-col text-white mx-4">
            <div className="text-2xl font-bold">99.999%</div>
            <div className="text-slate-200">
              historical uptime for  <span className="text-cyan-300"> Stripe services.</span>
            </div>
          </div>
          <div className="flex flex-col text-white mx-4">
            <div className="text-2xl font-bold">47+</div>
            <div className="text-slate-200">
              countries with local acquiring.
            </div>
          </div>
          <div className="flex flex-col text-white mx-4">
            <div className="text-2xl font-bold">135+</div>
            <div className="text-slate-200">
              currencies and payment methods supported.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
