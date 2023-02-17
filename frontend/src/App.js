import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Admin/Dashboard";
import Home from "./components/Home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./components/Login/Login";
import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import Profile from "./components/Profile/Profile";
import Shipping from "./components/Shipping/Shipping";
import Users from "./components/Admin/Users";
import Orders from "./components/Admin/Orders";
import About from "./components/About/About";
import NotFound from "./components/layout/NotFound";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route
               path="/"
               element={<Home />}
            />
            <Route
               path="/contact"
               element={<Contact />}
            />
            <Route
               path="/login"
               element={<Login />}
            />
            <Route
               path="/profile"
               element={<Profile />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/cart"
               element={<Cart />}
            />
            <Route
               path="/shipping"
               element={<Shipping />}
            />
            <Route
               path="/confirmorder"
               element={<ConfirmOrder />}
            />
            <Route
               path="/paymentsuccess"
               element={<PaymentSuccess />}
            />
            <Route
               path="/myorders"
               element={<MyOrders />}
            />
            <Route
               path="/order/:id"
               element={<OrderDetails />}
            />
            <Route
               path="/admin/dashboard"
               element={<Dashboard />}
            />
            <Route
               path="/admin/users"
               element={<Users />}
            />
            <Route
               path="/admin/orders"
               element={<Orders />}
            />
            {/* Error Not Found */}
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
