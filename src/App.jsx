import { Navigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Cart from "./components/Pages/CartPage/Cart";
import Home from "./components/Pages/Home/Home";
import { createContext, useState, useEffect } from "react";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Login from "./components/Pages/Login/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { AuthProvider } from "./components/AuthContext/AuthProvider";
import ManageStoreProducts from "./components/Pages/ManageStoreProducts/ManageStoreProducts";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage/ProductDetailsPage";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import AboutUS from "./components/Pages/AboutUs/AboutUS";

export const DataContext = createContext();

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? children : <Navigate to="/Login" replace />;
};

function App() {

  const location = useLocation();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [sharedData, setSharedData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedCount = parseInt(localStorage.getItem("cartCount",)) || 0;

    setCartItems(storedItems);
    setCartCount(storedCount);
  }, [])


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);


      // setProducts(response.data);
      setSharedData(response.data);
    } catch (error) {
      console.error("API error", error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const hideLayoutRoutes = ["/Login", "/Cart", "/Dashboard"]
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname)

  return (
    <>
      <div className="wrapper">
        <AuthProvider>
          <DataContext.Provider
            value={{
              sharedData,
              setSharedData,
              cartCount,
              setCartCount,
              cartItems,
              setCartItems,
              loading
            }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Cart" element={<Cart />}></Route>
              <Route path="/AboutUs" element={<AboutUS />}></Route>
              <Route path="/ContactUs" element={<ContactUs />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/ManageStoreProducts"
                element={
                  <ProtectedRoute>
                    <ManageStoreProducts />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/ProductDetailsPage/:id"
                element={<ProductDetailsPage />}
              ></Route>
            </Routes>
            {!shouldHideLayout && <Footer />}

          </DataContext.Provider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
