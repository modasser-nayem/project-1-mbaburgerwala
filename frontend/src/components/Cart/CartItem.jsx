const CartItem = ({ value, title, img, increment, decrement }) => {
   return (
      <div className="flex justify-between mt-5 w-full h-16 rounded-md px-5 bg-gray-100">
         <div className="flex md:gap-4 items-center">
            <h4 className="tracking-[0.2rem]">{title}</h4>
            <img
               className="h-12"
               src={img}
               alt="item"
            />
         </div>
         <div className="flex items-center gap-2">
            <button
               className="h-6 px-2 rounded text-white bg-dark"
               onClick={decrement}
            >
               -
            </button>
            <input
               className="w-5 text-xl text-center"
               type="text"
               disabled
               value={value}
            />
            <button
               className="h-6 px-2 rounded text-white bg-dark"
               onClick={increment}
            >
               +
            </button>
         </div>
      </div>
   );
};

export default CartItem;
