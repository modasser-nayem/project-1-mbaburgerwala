import React from "react";
import me from "../../assets/me.jpg";
import { motion } from "framer-motion";

const Users = () => {
   const tcontent = [1, 2, 3, 4, 5, 6];
   return (
      <section className="py-8 md:py-16 w-full bg-pink overflow-hidden">
         <main className="w-full lg:w-7/12 p-2 md:p-8 mx-auto bg-white">
            <div className="rounded-xl overflow-auto">
               <motion.table
                  initial={{ x: "-100%" }}
                  animate={{ x: 0, scrollBehavior: "smooth" }}
                  transition={{ delay: 0.3 }}
                  className="cs-table text-center text-xl w-full"
               >
                  <thead className="text-lg text-white bg-dark">
                     <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                     </tr>
                  </thead>
                  <tbody>
                     {tcontent.map((i, index) => (
                        <tr
                           key={index}
                           className="bg-gray-100"
                        >
                           <td>#sdfkdhfkjd</td>
                           <td>Nayem</td>
                           <td>
                              <img
                                 className="w-10 h-10 rounded-full mx-auto"
                                 src={me}
                                 alt="User"
                              />
                           </td>
                           <td>Admin</td>
                           <td>{"01/02/2023"}</td>
                        </tr>
                     ))}
                  </tbody>
               </motion.table>
            </div>
         </main>
      </section>
   );
};

export default Users;
