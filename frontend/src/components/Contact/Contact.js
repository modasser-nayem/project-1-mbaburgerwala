import React from "react";
import { motion } from "framer-motion";
import "../../style/contact.css";
import contBurger from "../../assets/burger2.png";

const Contact = () => {
   return (
      <section className="contact py-16 flex justify-center">
         <motion.form
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-10/12 py-4 px-6 md:w-7/12 lg:w-4/12 md:py-8 md:px-12 lg:py-12 lg:px-16 bg-white"
         >
            <h2 className="cs-title">Contact Us</h2>
            <input
               className="input-control"
               type="text"
               name="name"
               value=""
               onChange=""
               placeholder="Enter Your Name"
            />
            <input
               className="input-control"
               type="email"
               name="email"
               value=""
               onChange=""
               placeholder="Enter Your Email"
            />
            <textarea
               className="input-control h-40 resize-none"
               type="text"
               name=""
               value=""
               onChange=""
               placeholder="Message"
            />
            <button
               className="w-full my-btn"
               type="text"
            >
               Send
            </button>
         </motion.form>
         <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block md:w-20 lg:w-36 h-full bg-white rounded-r-[100px]"
         >
            <motion.div className="absolute w-36 h-w-36 lg:w-56 lg:h-56 top-[40%] lg:top-1/3 translate-x-[5%] lg:translate-x-[15%]">
               <motion.img
                  initial={{ y: "-100vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="w-full"
                  src={contBurger}
                  alt="burger"
               />
            </motion.div>
         </motion.div>
      </section>
   );
};

export default Contact;
