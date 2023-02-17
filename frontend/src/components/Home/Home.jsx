import React from "react";
import { motion } from "framer-motion";
import "../../style/home.css";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
   const options = {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
   };

   return (
      <>
         <section className="home overflow-x-hidden">
            <div className="py-12 md:py-40 px-10">
               <motion.h1
                  {...options}
                  className="text-6xl font-semibold uppercase mb-2"
               >
                  MBA Burger Wala
               </motion.h1>
               <motion.p
                  {...options}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-medium mb-10"
               >
                  Give yourself a testy Burger
               </motion.p>
               <motion.a
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="#menu"
                  className="mt-8 py-4 px-7 text-base text-white bg-red hover:bg-reddark cursor-pointer rounded-lg"
               >
                  Explore Menu
               </motion.a>
            </div>
         </section>
         <Founder />
         <Menu />
      </>
   );
};

export default Home;
