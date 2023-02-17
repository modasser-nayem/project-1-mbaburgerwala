import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
   return (
      <div className="py-8 md:py-16 w-full bg-pink flex justify-center items-center">
         <IoFastFoodOutline className="text-9xl text-red opacity-50" />
         <div className="opacity-80">
            <p className="text-5xl flex items-baseline gap-3">
               <span className="animate-pulse">Loading...</span>
               <p className="animate-spin">
                  <AiOutlineLoading3Quarters className="text-3xl font-semibold text-red" />
               </p>
            </p>
         </div>
      </div>
   );
};

export default Loader;
