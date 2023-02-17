import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
   const addToCart = (itemNum) => {};
   return (
      <section
         id="menu"
         className="w-full min-h-screen bg-white p-8 md:p-16"
      >
         <h1 className="text-4xl font-semibold text-center p-8">Menu</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <MenuCard
               itemNum={1}
               burgerSrc={burger1}
               price={100}
               title="Cheese Burger1"
               handler={addToCart}
               delay={0.2}
            />
            <MenuCard
               itemNum={2}
               burgerSrc={burger2}
               price={200}
               title="Cheese Burger2"
               handler={addToCart}
               delay={0.5}
            />
            <MenuCard
               itemNum={3}
               burgerSrc={burger3}
               price={300}
               title="Cheese Burger3"
               handler={addToCart}
               delay={0.8}
            />
         </div>
      </section>
   );
};

export default Menu;
