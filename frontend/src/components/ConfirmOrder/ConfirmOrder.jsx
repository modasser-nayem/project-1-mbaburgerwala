import React from "react";

const ConfirmOrder = () => {
   return (
      <section className="py-8 md:py-16 w-full bg-pink">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 p-8 md:p-16 mx-auto bg-white">
            <h1 className="cs-title">Confirm Order</h1>
            <form>
               <div className="input-control bg-gray-200 flex items-center justify-between">
                  <label
                     className="text-xl font-medium"
                     htmlFor="COD"
                  >
                     Cash On Delivery
                  </label>
                  <input
                     id="COD"
                     className=""
                     type="radio"
                     name="payment"
                     value=""
                  />
               </div>
               <div className="input-control bg-gray-200 flex items-center justify-between">
                  <label
                     className="text-xl font-medium"
                     htmlFor="online"
                  >
                     Online
                  </label>
                  <input
                     id="online"
                     className=""
                     type="radio"
                     name="payment"
                     value=""
                  />
               </div>
               <button
                  className="my-btn w-full md:w-fit md:ml-[40%]"
                  type="submit"
               >
                  Place Order
               </button>
            </form>
         </main>
      </section>
   );
};

export default ConfirmOrder;
