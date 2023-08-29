import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MenTShirtProducts from "./pages/MenTShirtProducts";
import SellerSignUp from "./components/SellerSignUp";
import SellerSignIn from "./components/SellerSignIn";
import SellerDashboard from "./components/SellerDashabord";
import MensClothsForm from "./components/MensClothsForm";
import Wishlist from "./pages/Wishlist";
import Footer  from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import MenJeansProducts from "./pages/MenJeansProducts";
import MenShoesProducts from "./pages/MenShoesProducts";
import WomenTShirtProducts from "./pages/WomenTShirtProducts";
import WomenJeansProducts from "./pages/WomenJeansProducts";
import WomenShoesProducts from "./pages/WomenShoesProducts";
import KidTShirtProducts from "./pages/KidTShirtProducts";
import KidJeansProducts from "./pages/KidJeansProducts";
import KidShoesProducts from "./pages/KidShoesProducts";
import OrderProducts from "./pages/OrderProducts";
import Bag from "./pages/Bag";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men/shirts" element={<MenTShirtProducts />} />
        <Route path="/kid/shirts" element={<KidTShirtProducts />} />
        <Route path="/women/shirts" element={<WomenTShirtProducts />} />
        <Route path="/men/jeans" element={<MenJeansProducts />} />
        <Route path="/women/jeans" element={<WomenJeansProducts />} />
        <Route path="/kid/jeans" element={<KidJeansProducts />} />
        <Route path="/men/shoes" element={<MenShoesProducts />} />
        <Route path="/women/shoes" element={<WomenShoesProducts />} />
        <Route path="/kid/shoes" element={<KidShoesProducts />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/seller/sign-up" element={<SellerSignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/seller/sign-in" element={<SellerSignIn />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/men-clothes" element={<MensClothsForm />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/orders" element={<OrderProducts  />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
