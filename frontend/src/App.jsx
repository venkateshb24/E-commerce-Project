import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import Login from "./login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn,setIsLoggedIn]=useState(
    !!localStorage.getItem("token")
  );

  useEffect(()=>{
    const handleStorageChange=()=>{
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage",handleStorageChange);
    return ()=> window.removeEventListener("storage",handleStorageChange)
  },[])

  // useEffect --- watch cart changes
  useEffect(() => {
    console.log("Cart Updated:", cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLoginState=(state)=>setIsLoggedIn(state);

  return (
    <>
      <Navbar 
        cartCount={cart.length} 
        isLoggedIn={isLoggedIn}
        onLogout={() => {
          localStorage.removeItem("token");
          handleLoginState(false);
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login onLogin={() => handleLoginState(true)} />}
        />
        <Route
          path="/register"
          element={<Register onRegister={()=>handleLoginState(true)}/>}
        />
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
            <Products addToCart={addToCart} />
            </ProtectedRoute>
          }
        />
          
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart cart={cart} />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  );
}

export default App;