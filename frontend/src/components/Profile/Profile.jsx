import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const options = {
   initial: {
      y: "-100%",
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
   },
};

const Profile = () => {
   return (
      <section className="py-8 md:py-16 w-full bg-pink overflow-hidden">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 p-8 md:p-16 mx-auto bg-white flex flex-col items-center gap-8">
            <motion.img
               className="w-64 h-64 rounded-full"
               src={me}
               alt="user"
               {...options}
            />
            <motion.h5
               className="text-3xl"
               transition={{ delay: 0.2 }}
               {...options}
            >
               Ali Modasser Nayem
            </motion.h5>
            <motion.div
               transition={{ delay: 0.4 }}
               {...options}
            >
               <Link
                  className="cs-btn-black hover:scale-110 transition-all flex items-center gap-3 mx-auto"
                  to="/admin/dashboard"
               >
                  <MdDashboard />
                  Dashboard
               </Link>
            </motion.div>
            <motion.div
               initial={{ x: "-100vw", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.6 }}
            >
               <Link
                  className="cs-btn-light hover:scale-110 transition-all flex items-center mx-auto"
                  to="/myorders"
               >
                  Orders
               </Link>
            </motion.div>
            <motion.button
               initial={{ x: "100vw", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="cs-btn-red text-xl font-medium"
            >
               Logout
            </motion.button>
         </main>
      </section>
   );
};

export default Profile;
