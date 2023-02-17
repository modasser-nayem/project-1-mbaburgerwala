import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Loader from "../layout/Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

const Box = ({ title, value }) => (
   <div className="w-28 h-28 flex flex-col items-center justify-center p-2 my-5 rounded-full bg-white">
      <h3 className="text-2xl font-bold">
         {title === "Income" && "$"}
         {value}
      </h3>
      <p>{title}</p>
   </div>
);

const Dashboard = () => {
   const loading = true;
   const data = {
      labels: ["Preparing", "Shipping", "Delivered"],
      datasets: [
         {
            // label: "# of Votes",
            data: [2, 3, 4],
            backgroundColor: [
               "rgba(255, 99, 132, 0.5)",
               "rgba(54, 162, 235, 0.5)",
               "rgba(255, 205, 86, 0.5)",
            ],
            borderColor: [
               "rgb(255, 99, 132)",
               "rgb(54, 162, 235)",
               "rgb(255, 205, 86)",
            ],
            borderWidth: 1,
         },
      ],
   };

   return (
      <section className="py-8 md:py-16 w-full bg-pink">
         {loading === false ? (
            <main className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto h-full bg-white">
               <article className="flex flex-col md:flex-row items-center justify-around bg-dark">
                  <Box
                     title="User"
                     value={213}
                  />
                  <Box
                     title="Orders"
                     value={213}
                  />
                  <Box
                     title="Income"
                     value={213}
                  />
               </article>
               <section className="grid  md:grid-cols-2 gap-5 items-center justify-center">
                  <div className="flex flex-col items-center w-full">
                     <Link
                        className="cs-btn-black hover:scale-110 transition-all"
                        to="/admin/orders"
                     >
                        View Orders
                     </Link>
                     <Link
                        className="cs-btn-red hover:scale-110 transition-all"
                        to="/admin/users"
                     >
                        View Users
                     </Link>
                  </div>
                  <aside className="w-full p-8">
                     <Doughnut
                        data={data}
                        className="w-full"
                     />
                  </aside>
               </section>
            </main>
         ) : (
            <Loader />
         )}
      </section>
   );
};

export default Dashboard;
