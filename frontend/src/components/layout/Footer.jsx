import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
   return (
      <footer className="p-16 grid lg:grid-cols-3 gap-8 text-white bg-dark">
         <div className="col-span-2">
            <h2 className="text-red text-4xl">MBA Burger Wala</h2>
            <p className="my-4">
               We are trying to give you the best taste possible.
            </p>
            <br />
            <em>We give attention to genuine feedback.</em>
            <strong className="m-4 tracking-[0.2]">
               All right received @mbaburgerwala
            </strong>
         </div>
         <aside className=" ">
            <h4 className="text-lg mb-3">Follow Us</h4>
            <div className="flex gap-5">
               <a
                  className="text-4xl hover:text-red"
                  href="#"
               >
                  <AiFillYoutube />
               </a>
               <a
                  className="text-4xl hover:text-red"
                  href="#"
               >
                  <AiFillInstagram />
               </a>
               <a
                  className="text-4xl hover:text-red"
                  href="#"
               >
                  <AiFillGithub />
               </a>
            </div>
         </aside>
      </footer>
   );
};

export default Footer;
