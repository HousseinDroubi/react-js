import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/routing/Home";
import SignIn from "./pages/routing/SignIn";
import ViewProduct from "./pages/routing/ViewProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view-product/:product_id" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
