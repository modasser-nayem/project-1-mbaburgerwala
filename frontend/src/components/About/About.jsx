import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.jpg";

const About = () => {
   const options = {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
   };
   const options2 = {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
   };
   return (
      <section className="py-8 md:py-16 w-full bg-pink">
         <main className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto bg-white overflow-hidden">
            <h1 className="cs-title bg-black text-white py-7">About Us</h1>
            <article className="p-12">
               <motion.h4
                  {...options}
                  className="cs-title"
               >
                  MBA Burger Wala
               </motion.h4>
               <motion.p
                  {...options2}
                  transition={{ delay: 0.2 }}
                  className="text-center text-xl tracking-[0.3rem] mb-7"
               >
                  We are MBA "Burger Wala. The Place for Most tasty burgers on
                  the enitre earth.
               </motion.p>
               <motion.p
                  {...options}
                  transition={{ delay: 0.4 }}
                  className="text-center text-xl tracking-[0.3rem] mb-7"
               >
                  Explore the various typw of food and burgers. Click below to
                  see the menu
               </motion.p>
               <motion.div
                  {...options2}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center mb-10"
               >
                  <Link
                     to="/"
                     className="bg-dark w-fit text-4xl text-white p-2 rounded-full hover:scale-125"
                  >
                     <RiFindReplaceLine />
                  </Link>
               </motion.div>
            </article>
            <motion.div
               {...options}
               transition={{ delay: 0.5 }}
               className="bg-dark text-white px-8 py-12 mx-auto flex flex-col items-center gap-5"
            >
               <h3 className="text-4xl text-center uppercase">Founder</h3>
               <img
                  className="w-52 h-52 rounded-full"
                  src={me}
                  alt="Founder"
               />
               <h3 className="text-4xl text-center">Ali Modasser Nayem</h3>
               <p className="text-center text-xl tracking-[0.3rem]">
                  I am Ali Modasser Nayem, the founder of MBA Burger Wala.
                  Affiliated to Fod TAste...
               </p>
            </motion.div>
         </main>
      </section>
   );
};

export default About;
