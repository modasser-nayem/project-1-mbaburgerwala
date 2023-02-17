import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
   return (
      <section className="py-8 md:py-16 w-full min-h-screen bg-pink">
         <main>
            <h1 className="cs-title">Shipping Details</h1>
            <form className="w-11/12 md:w-8/12 lg:w-6/12 p-8 md:p-16 mx-auto bg-white">
               <div>
                  <label
                     className="cs-label"
                     htmlFor="houseNo"
                  >
                     H.No.
                  </label>
                  <input
                     className="input-control"
                     id="houseNo"
                     type="number"
                     name=""
                     value=""
                     onChange=""
                     placeholder="Enter House No."
                  />
               </div>
               <div>
                  <label
                     className="cs-label"
                     htmlFor="city"
                  >
                     City
                  </label>
                  <input
                     className="input-control"
                     id="city"
                     type="text"
                     name=""
                     value=""
                     onChange=""
                     placeholder="Enter Your City"
                  />
               </div>
               <div>
                  <label
                     className="cs-label"
                     htmlFor="country"
                  >
                     Country
                  </label>
                  <select
                     name=""
                     id="country"
                     className="input-control"
                  >
                     <option value="">Select country</option>
                     {Country &&
                        Country.getAllCountries().map((i) => (
                           <option
                              key={i.isoCode}
                              value={i.isoCode}
                           >
                              {i.name}
                           </option>
                        ))}
                  </select>
               </div>
               <div>
                  <label
                     className="cs-label"
                     htmlFor="state"
                  >
                     State
                  </label>
                  <select
                     name=""
                     id="state"
                     className="input-control"
                  >
                     <option value="">Select State</option>
                     {State &&
                        State.getStatesOfCountry("BD").map((i) => (
                           <option
                              key={i.isoCode}
                              value={i.isoCode}
                           >
                              {i.name}
                           </option>
                        ))}
                  </select>
               </div>
               <div>
                  <label
                     className="cs-label"
                     htmlFor="pinCode"
                  >
                     Pin Code
                  </label>
                  <input
                     className="input-control"
                     id="pinCode"
                     type="number"
                     name=""
                     value=""
                     onChange=""
                     placeholder="Enter Your Pin Code"
                  />
               </div>
               <div>
                  <label
                     className="cs-label"
                     htmlFor="phoneNo"
                  >
                     Phone No.
                  </label>
                  <input
                     className="input-control"
                     id="phoneNo"
                     type="number"
                     name=""
                     value=""
                     onChange=""
                     placeholder="Enter Your Phone No"
                  />
               </div>
               <button className="my-btn">Confirm Order</button>
            </form>
         </main>
      </section>
   );
};

export default Shipping;
