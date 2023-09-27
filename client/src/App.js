import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.auth.data._id);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/posts"} />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/search" element={<>searches</>} />
        <Route path="/post/:id" element={<>post detail</>} />
        <Route
          path="/auth"
          element={auth ? <Navigate to={"/posts"} /> : <Auth />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
