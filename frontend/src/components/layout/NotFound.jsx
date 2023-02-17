import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <section className="py-8 md:py-16 w-full bg-pink">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 min-h-[50vh] p-8 md:p-16 mx-auto bg-white">
            <div className="flex flex-col justify-center items-center gap-5">
               <div className="flex justify-center items-center text-6xl">
                  <MdError className="text-red" />
                  <span>404</span>
               </div>
               <p className="text-lg">
                  Page Not Found, click below to go home page
               </p>
               <Link
                  to="/"
                  className="cs-btn-red"
               >
                  Go to home
               </Link>
            </div>
         </main>
      </section>
   );
};

export default NotFound;
