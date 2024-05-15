import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Category from "./Category";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
import Seller from "./Seller";
import Wishlists from "./Wishlists";
import Payments from "./Payments";
import Order from "./Order";
import Offer from "./Offer";
import Address from "./Address";
import Listing from "./Listing";
import Profile from "./Profile";
import Grid from "./Grid";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/category" element={<Category />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/wishlists" element={<Wishlists />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/order" element={<Order />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/address" element={<Address />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/listinggrid" element={<Grid />} />
    </Routes>
  </main>
);
export default Main;
