import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";

const Orders = () => {
   const tcontent = [1, 2, 3, 4, 5];
   return (
      <section className="py-8 md:py-16 w-full bg-pink">
         <main className="w-full lg:w-7/12 p-2 md:p-8 mx-auto bg-white overflow-hidden">
            <div className="rounded-xl overflow-auto">
               <motion.table
                  initial={{ x: "-100%" }}
                  animate={{ x: 0, scrollBehavior: "smooth" }}
                  transition={{ delay: 0.3 }}
                  className="cs-table text-center text-xl w-full"
               >
                  <thead className="text-lg text-white bg-dark">
                     <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Oty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>User</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {tcontent.map((i, index) => (
                        <tr
                           key={index}
                           className="bg-gray-100"
                        >
                           <td>#sdfkdhfkjd</td>
                           <td>Processing</td>
                           <td>13</td>
                           <td>$500</td>
                           <td>Online</td>
                           <td>Ali Modasser</td>
                           <td>
                              <div className="flex justify-center items-center gap-6">
                                 <Link to={`/order/${"id"}`}>
                                    <span className="w-[10px] overflow-hidden">
                                       <AiOutlineEye />
                                    </span>
                                 </Link>
                                 <button className="text-red hover:scale-125 transition-all">
                                    <GiArmoredBoomerang />
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </motion.table>
            </div>
         </main>
      </section>
   );
};

export default Orders;
