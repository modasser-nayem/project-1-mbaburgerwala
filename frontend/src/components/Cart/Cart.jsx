import burger2 from "../../assets/burger2.png";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
   const count = 0;
   // const increment = () => {
   //    setCount({
   //       ...(count + 1),
   //    });
   // };
   // const decrement = () => {
   //    setCount({
   //       ...(count - 1),
   //    });
   // };
   return (
      <section className="bg-pink w-screen h-screen p-5">
         <main className="bg-white md:w-8/12 mx-auto p-8">
            <CartItem
               value={count}
               title={"cheses burger"}
               img={burger2}
               // increment="{increment}"
               // decrement="{decrement}"
            />
            <CartItem
               value={count}
               title={"cheses burger2"}
               img={burger2}
               // increment="{increment}"
               // decrement="{decrement}"
            />
            <CartItem
               value={count}
               title={"cheses burger3"}
               img={burger2}
               // increment="{increment}"
               // decrement="{decrement}"
            />
            <article className="pt-8">
               <div className="flex items-center justify-between my-4">
                  <h4 className="text-xl font-semibold">Sub Total</h4>
                  <p className="text-xl font-medium">${200}</p>
               </div>
               <div className="flex items-center justify-between my-4">
                  <h4 className="text-xl font-semibold">Tax</h4>
                  <p className="text-xl font-medium">${200 * 0.18}</p>
               </div>
               <div className="flex items-center justify-between my-4">
                  <h4 className="text-xl font-semibold">Shipping Charge</h4>
                  <p className="text-xl font-medium">${20}</p>
               </div>
               <div className="flex items-center justify-between my-4">
                  <h4 className="text-xl font-semibold">Total</h4>
                  <p className="text-xl font-medium">${2000}</p>
               </div>
               <div className="mx-auto w-full">
                  <Link
                     className="cs-btn-red block mx-auto md:ml-auto md:mx-0"
                     to="/shipping"
                  >
                     Checkout
                  </Link>
               </div>
            </article>
         </main>
      </section>
   );
};

export default Cart;
