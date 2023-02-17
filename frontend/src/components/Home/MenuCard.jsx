import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
   return (
      <motion.div
         initial={{ x: "-100%", opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ delay }}
         className="rounded-xl shadow-lg shadow-slate-300"
      >
         <div className="bg-red p-8 text-white text-center rounded-t-xl">
            Item {itemNum}
         </div>
         <main className="p-8 flex flex-col items-center">
            <img
               className="w-full h-60 object-contain"
               src={burgerSrc}
               alt={itemNum}
            />
            <h5 className="text-3xl font-semibold">${price}</h5>
            <p className="uppercase text-lg text-center py-4 tracking-[0.2rem] ">
               {title}
            </p>
            <button
               className="bg-red text-white py-4 px-8 rounded-lg hover:bg-reddark w-full"
               onClick={() => handler(itemNum)}
            >
               Buy Now
            </button>
         </main>
      </motion.div>
   );
};

export default MenuCard;
