import React from "react";
import "../styleSheet/Hero2.css";
export const Hero2 = () => {
  return (
    <div className="h-[120vh] w-full flex">
      <div className="h-full w-[20%]"></div>
      <div className="h-full w-[60%] flex flex-col items-center justify-center">
        <div className="w-full h-[25vh] flex flex-col justify-around items-center">
          <div className="w-full flex justify-evenly mx-12">
            <div className="flex justify-evenly w-full">
              <img
                src="https://fontmeme.com/images/Amazon-Logo.jpg"
                alt="Amazon Logo"
                className="w-24 h-auto"
              />
              <img
                src="https://i.pinimg.com/564x/a9/6b/1f/a96b1fa3bfefafe53b95500f03b0f5df.jpg"
                alt="Salesforce Logo"
                className="w-24 h-auto"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
                alt="Google Logo"
                className="w-24 h-auto"
              />
              <img
                src="https://i.pinimg.com/564x/a4/7f/51/a47f51754ccec7b85ed3f5216aaaa6d2.jpg"
                alt="Zara Logo"
                className="w-24 h-auto"
              />
            </div>
          </div>
          <div className="w-full flex justify-evenly mx-12 mt-8">
            <div className="flex justify-evenly w-full">
              <img
                src="https://i.pinimg.com/564x/fc/f3/3d/fcf33d4384531da29a59357899c6419e.jpg"
                alt="Shopify Logo"
                className="w-24 h-auto"
              />
              <img
                src="https://i.pinimg.com/564x/04/d1/fb/04d1fbef945548e9cd53af90eb521d0f.jpg"
                alt="WhatsApp Logo"
                className="w-24 h-auto"
              />
              <img
                src="https://logowik.com/content/uploads/images/398_bmw.jpg"
                alt="BMW Logo"
                className="w-24 h-auto"
              />
              <img
                src="https://i.pinimg.com/280x280_RS/22/cb/84/22cb846b75f8b52ef61ff8c67ba01c2d.jpg"
                alt="Marriott Logo"
                className="w-24 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full  flex items-center justify-center">
          <div className="w-[50%] h-[100%] gap-8 flex flex-col  justify-center bg-slate-200 ml-20">
            <div className=" text-[#635BFF] font-bold text-xl flex items-center ml-20">
              {" "}
              Modular solutions{" "}
            </div>
            <div className="  font-bold text-5xl flex items-center ml-20">
              {" "}
              A fully integrated <br />
              suite of financial <br /> and payments <br /> products{" "}
            </div>
            <div className=" text-gray-600 flex items-center ml-20">
              Reduce costs, grow revenue, and run your business <br />
              more efficiently on a fully integrated platform. Use <br />
              Stripe to handle all of your payments-related needs,
              <br />
              manage revenue operations, and launch (or invent) new <br />
              business models.
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-center  relative overflow-hidden bg-slate-200">
            <div className="card">
              <div className="card-content">
                <div className="card-front"></div>

                <div className="card-back">
                  <div className="back-title">
                  Issuing
                  </div>
                  <div className="movie-description">
                  Build a fintech <span>offering with</span> banking-as-a-service 
                  </div>
                  <div className="genre"> Launch, manage, and scale a commercial card programme without any setup fees. </div>

                  <a href="#" className="btn1">
                  Start with Issuing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[20%] "></div>
    </div>
  );
};

export default Hero2;
