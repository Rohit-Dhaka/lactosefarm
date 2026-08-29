import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CartDrawer from "./components/CartDrawer";
import HowOrderingWorks from "./components/HowOrderingWorks";
import WhyLactoseFarm from "./components/WhyLactoseFarm";
import TrustPoints from "./components/TrustPoints";

function App() {
  // Initialize cart state directly from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("lactose_farm_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart changes with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("lactose_farm_cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  // Add Item to Cart
  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  // Update Cart Quantity from Drawer
  const handleUpdateCartQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove Item from Cart
  const handleRemoveCartItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={handleToggleCart}
        onToggleCart={handleToggleCart}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              onAddToCart={handleAddToCart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveCartItem={handleRemoveCartItem}
              onClearCart={handleClearCart}
              totalCartCount={totalCartCount}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              cart={cart}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              onAddToCart={handleAddToCart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveCartItem={handleRemoveCartItem}
              onClearCart={handleClearCart}
              totalCartCount={totalCartCount}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartDrawer
              isOpen={true}
              onClose={() => {}}
              cart={cart}
              onUpdateQuantity={handleUpdateCartQty}
              onRemoveItem={handleRemoveCartItem}
              onClearCart={handleClearCart}
            />
          }
        />
        <Route path="/delivery" element={<HowOrderingWorks />} />
        <Route path="/promise" element={<WhyLactoseFarm />} />
        <Route
          path="/products"
          element={
            <TrustPoints
              cart={cart}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              onAddToCart={handleAddToCart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveCartItem={handleRemoveCartItem}
              onClearCart={handleClearCart}
              totalCartCount={totalCartCount}
            />
          }
        />
      </Routes>

      {/* Global Drawer overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <Footer />
    </>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import CartDrawer from "./components/CartDrawer";
// import HowOrderingWorks from "./components/HowOrderingWorks";
// import WhyLactoseFarm from "./components/WhyLactoseFarm";
// import TrustPoints from "./components/TrustPoints";

// function App() {
//   // Initialize cart state directly from localStorage
//   const [cart, setCart] = useState(() => {
//     try {
//       const savedCart = localStorage.getItem("lactose_farm_cart");
//       return savedCart ? JSON.parse(savedCart) : [];
//     } catch (error) {
//       console.error("Error reading cart from localStorage:", error);
//       return [];
//     }
//   });

//   const [isCartOpen, setIsCartOpen] = useState(false);

//   // Sync cart changes with localStorage
//   useEffect(() => {
//     try {
//       localStorage.setItem("lactose_farm_cart", JSON.stringify(cart));
//     } catch (error) {
//       console.error("Error saving cart to localStorage:", error);
//     }
//   }, [cart]);

//   // Add Item to Cart
//   const handleAddToCart = (product, quantity) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.id === product.id);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity }];
//     });
//     setIsCartOpen(true);
//   };

//   // Update Cart Quantity from Drawer
//   const handleUpdateCartQty = (id, newQty) => {
//     if (newQty <= 0) {
//       handleRemoveCartItem(id);
//       return;
//     }
//     setCart((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
//     );
//   };

//   // Remove Item from Cart
//   const handleRemoveCartItem = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Clear Cart
//   const handleClearCart = () => {
//     setCart([]);
//   };

//   // const handleToggleCart = () => {
//   //   setIsCartOpen((prev) => !prev);
//   // };

//   // const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <>
//       {/* <Navbar
//         cartCount={totalCartCount}
//         onOpenCart={handleToggleCart}
//       /> */}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               cart={cart}
//               isCartOpen={isCartOpen}
//               setIsCartOpen={setIsCartOpen}
//               onAddToCart={handleAddToCart}
//               onUpdateCartQty={handleUpdateCartQty}
//               onRemoveCartItem={handleRemoveCartItem}
//               onClearCart={handleClearCart}
//               totalCartCount={totalCartCount}
//             />
//           }
//         />
//         <Route
//           path="/home"
//           element={
//             <Home
//               cart={cart}
//               isCartOpen={isCartOpen}
//               setIsCartOpen={setIsCartOpen}
//               onAddToCart={handleAddToCart}
//               onUpdateCartQty={handleUpdateCartQty}
//               onRemoveCartItem={handleRemoveCartItem}
//               onClearCart={handleClearCart}
//               totalCartCount={totalCartCount}
//             />
//           }
//         />

//         <Route
//           path="/cart"
//           element={
//             <CartDrawer
//               isOpen={true}
//               onClose={() => {}}
//               cart={cart}
//               onUpdateQuantity={handleUpdateCartQty}
//               onRemoveItem={handleRemoveCartItem}
//               onClearCart={handleClearCart}
//             />
//           }
//         />
//         <Route path="/delivery" element={<HowOrderingWorks />} />
//         <Route path="/promise" element={<WhyLactoseFarm />} />
//         <Route
//           path="/products"
//           element={
//             <TrustPoints
//               cart={cart}
//               isCartOpen={isCartOpen}
//               setIsCartOpen={setIsCartOpen}
//               onAddToCart={handleAddToCart}
//               onUpdateCartQty={handleUpdateCartQty}
//               onRemoveCartItem={handleRemoveCartItem}
//               onClearCart={handleClearCart}
//               totalCartCount={totalCartCount}
//             />
//           }
//         />
//       </Routes>

//       {/* Global Drawer overlay */}
//       <CartDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         onUpdateQuantity={handleUpdateCartQty}
//         onRemoveItem={handleRemoveCartItem}
//         onClearCart={handleClearCart}
//       />

//       <Footer />
//     </>
//   );
// }

// export default App;