import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
   return (
      <section className="py-8 md:py-16 w-full lg:h-[40vh] xl:h-[60vh] bg-pink">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 p-8 md:p-16 mx-auto bg-white">
            <motion.button
               initial={{ y: "-100%", opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="py-3 px-5 text-xl md:text-2xl md:font-medium bg-gray-100 hover:bg-gray-300 rounded-md flex items-center gap-3 mx-auto"
            >
               Login with Google <FcGoogle />
            </motion.button>
         </main>
      </section>
   );
};

export default Login;
