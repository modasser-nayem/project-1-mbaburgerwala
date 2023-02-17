import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";

const Founder = () => {
   const options = {
      initial: {
         x: "-100%",
         opacity: 0,
      },
      whileInView: {
         x: 0,
         opacity: 1,
      },
   };
   return (
      <section className="overflow-x-hidden py-32 bg-red">
         <motion.div
            {...options}
            className="w-9/12 md:w-7/12 lg:w-6/12 mx-auto flex flex-col items-center gap-5 text-white"
         >
            <img
               className="w-52 h-52 rounded-full"
               src={me}
               alt="Founder"
            />
            <h3 className="text-4xl text-center">Ali Modasser Nayem</h3>
            <p className="text-center text-xl tracking-[0.3rem]">
               Hey, Everyone I am Ali Modasser Nayem, the founder of MBA Burger
               Wala. <br />
               Our aim is to create the most tasty Burger planet.
            </p>
         </motion.div>
      </section>
   );
};

export default Founder;
