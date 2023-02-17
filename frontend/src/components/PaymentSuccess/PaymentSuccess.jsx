import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
   return (
      <section className="py-8 md:py-16 w-full bg-pink">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 p-8 md:p-16 mx-auto bg-white">
            <h1 className="cs-title">Order Confirmed</h1>
            <p className="text-center text-xl tracking-[0.1rem]">
               Order Placed Successfully, You can check order status below
            </p>
            <Link
               className="my-btn block mx-auto w-fit"
               to="/myorders"
            >
               Check Status
            </Link>
         </main>
      </section>
   );
};

export default PaymentSuccess;
