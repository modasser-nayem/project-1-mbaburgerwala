import React from "react";

const OrderDetails = () => {
   return (
      <section className="py-8 md:py-16 w-full bg-pink overflow-hidden">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 p-8 md:p-16 mx-auto bg-white">
            <h1 className="cs-title">Order Details</h1>
            <div className="cs-order-details-menu">
               <h2>Shipping</h2>
               <p>
                  Address
                  <span>{"mirsarai, chittaging"}</span>
               </p>
            </div>

            <div className="cs-order-details-menu">
               <h2>Contact</h2>
               <p>
                  Name: <span>{"Ali Modasser Nayem"}</span>
               </p>
               <p>
                  Phone: <span>{"+8801816090766"}</span>
               </p>
            </div>

            <div className="cs-order-details-menu">
               <h2>Status</h2>
               <p>
                  Order Status: <span>{"Processing"}</span>
               </p>
               <p>
                  Placed At: <span>{"02/04/2023"}</span>
               </p>
               <p>
                  Delivered At: <span>{"07/05/2023"}</span>
               </p>
            </div>
            <div className="cs-order-details-menu">
               <h2>Payment</h2>
               <p>
                  Payment Method: <span>{"Online"}</span>
               </p>
               <p>
                  Payment Reference: <span>{"sdfsdfd"}</span>
               </p>
               <p>
                  Paid At: <span>{"07/05/2023"}</span>
               </p>
            </div>
            <div className="cs-order-details-menu">
               <h2>Amount</h2>
               <p>
                  Item Total: <span>${"344"}</span>
               </p>
               <p>
                  Shipping Charge: <span>${"27"}</span>
               </p>
               <p>
                  Tax: <span>${"13"}</span>
               </p>
               <p>
                  Total: <span>${"500"}</span>
               </p>
            </div>
            <article>
               <h1 className="text-2xl font-bold uppercase mt-8">
                  Ordered Items
               </h1>
               <div className="flex items-center justify-between py-2.5 px-4 my-4 bg-gray-200 rounded-md">
                  <h4>Cheese Burger</h4>
                  <p>
                     <span>{12}</span> x <span>{120}</span>
                  </p>
               </div>
               <div className="flex items-center justify-between py-2.5 px-4 my-4 bg-gray-200 rounded-md">
                  <h4>Cheese Burger</h4>
                  <p>
                     <span>{12}</span> x <span>{120}</span>
                  </p>
               </div>
               <div className="flex items-center justify-between py-2.5 px-4 my-4 bg-gray-200 rounded-md">
                  <h4>Cheese Burger</h4>
                  <p>
                     <span>{12}</span> x <span>{120}</span>
                  </p>
               </div>
               <div className="flex items-center justify-between py-2.5 px-4 my-4 bg-gray-200 rounded-md font-semibold">
                  <h4>Sub Total</h4>
                  <p>${2500}</p>
               </div>
            </article>
         </main>
      </section>
   );
};

export default OrderDetails;
