import React, { useState } from "react";
import "../styleSheet/Navbar.css";
import { FaArrowRight } from "react-icons/fa6";
import Products from "./Products";
import Solution from "./Solution";
import Developers from "./Developers";
import Resources from "./Resources";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState({
    isProducts: false,
    isSolutions: false,
    isDevelopers: false,
    isResources: false,
    isPricing: false,
    isContact: false,
    signin: false,
  });
  return (
    <>
      <div className="h-16 w-full text-white md:px-[47vh] flex items-center justify-between gap-10 absolute z-10">
        <div className="flex items-center gap-9 pt-2">
          <h1 className="stripe md:text-2xl font-bold">Stripe</h1>
          <h1
            className="font-medium md:text-[0.95rem] hover:opacity-70 hover:cursor-pointer"
            onMouseEnter={() =>
              setIsHovered((prev) => ({ ...prev, isProducts: true }))
            }
            onMouseLeave={() =>
              setIsHovered((prev) => ({ ...prev, isProducts: false }))
            }
          >
            Products
          </h1>
          {isHovered.isProducts && (
            <div className="absolute left-0 top-16 w-full h-[80vh]">
              <Products />
            </div>
          )}
          
          <h1 className="font-medium md:text-[0.95rem] hover:opacity-70 hover:cursor-pointer"
          onMouseEnter={() =>
            setIsHovered((prev) => ({ ...prev, isSolutions: true }))
          }
          onMouseLeave={() =>
            setIsHovered((prev) => ({ ...prev, isSolutions: false }))
          }
          >
            Solutions
          </h1>
          {isHovered.isSolutions && (
            <div className="absolute left-0 top-16 w-full h-[80vh]">
              <Solution />
            </div>
          )}

          <h1 className="font-medium md:text-[0.95rem] hover:opacity-70 hover:cursor-pointer"
            onMouseEnter={() =>
              setIsHovered((prev) => ({ ...prev, isDevelopers: true }))
            }
            onMouseLeave={() =>
              setIsHovered((prev) => ({ ...prev, isDevelopers: false }))
            }
          >
            Developers
          </h1>
          {isHovered.isDevelopers && (
            <div className="absolute left-0 top-16 w-full h-[80vh]">
              <Developers />
            </div>
          )}

          <h1 className="font-medium md:text-[0.95rem] hover:opacity-70 hover:cursor-pointer"
            onMouseEnter={() =>
              setIsHovered((prev) => ({ ...prev, isResources: true }))
            }
            onMouseLeave={() =>
              setIsHovered((prev) => ({ ...prev, isResources: false }))
            }
          >
            Resources
          </h1>
          {isHovered.isResources && (
            <div className="absolute left-0 top-16 w-full h-[80vh]">
              <Resources />
            </div>
          )}
          <h1 className="font-medium md:text-[0.95rem] hover:opacity-70 hover:cursor-pointer">
            Pricing
          </h1>
        </div>
        <div className="flex items-center pt-2">
          <div
            className="hover:opacity-70 hover:cursor-pointer flex w-[12vh]"
            onMouseEnter={() =>
              setIsHovered((prev) => ({ ...prev, isContact: true }))
            }
            onMouseLeave={() =>
              setIsHovered((prev) => ({ ...prev, isContact: false }))
            }
          >
            <h1 className="font-medium md:text-[0.95rem]  ">Contact sale</h1>
            {isHovered.isContact ? (
              <span className="font-medium md:text-xs ml-1 pt-[0.58vh]">
                <FaArrowRight />
              </span>
            ) : (
              <span className="font-medium md:text-sm ml-1 pt-[0.25vh]">
                &gt;
              </span>
            )}
          </div>

          <div
            className="ml-5 hover:opacity-70 hover:cursor-pointer flex bg-white text-black p-1 px-3 rounded-3xl  w-[10vh]"
            onMouseEnter={() =>
              setIsHovered((prev) => ({ ...prev, signin: true }))
            }
            onMouseLeave={() =>
              setIsHovered((prev) => ({ ...prev, signin: false }))
            }
          >
            <h1 className="font-medium md:text-[0.95rem]  ">Sign in</h1>
            {isHovered.signin ? (
              <span className="font-medium md:text-xs ml-1 pt-[0.58vh]">
                <FaArrowRight />
              </span>
            ) : (
              <span className="font-medium md:text-sm ml-1 pt-[0.25vh]">
                &gt;
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
