import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Cart from "./components/Pages/CartPage/Cart";
import Home from "./components/Pages/Home/Home";
import { createContext, useState } from "react";
import Media from "./components/Pages/Media/Media";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Login from "./components/Pages/Login/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { AuthProvider } from "./components/AuthContext/AuthProvider";
import ManageStoreProducts from "./components/Pages/ManageStoreProducts/ManageStoreProducts";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage/ProductDetailsPage";

export const DataContext = createContext();

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? children : <Navigate to="/Login" replace />;
};

function App() {
  const [sharedData, setSharedData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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
            }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Cart" element={<Cart />}></Route>
              <Route path="/Media" element={<Media />}></Route>
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
          </DataContext.Provider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
