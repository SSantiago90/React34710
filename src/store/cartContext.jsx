import { createContext, useState } from "react";
// 1. Inicializamos el Context con React.createContext()
// 2. Creamos un Provider y le damos un "value"
// 3. Definimos los componentes que van a acceder al context (Consumers)
// 4. Damos a los componentes acceso al context con el hook useContext()
// 5. Los componentes consumers podrán acceder y "subscribirse" al "value" del context

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    if (cart.some((itemInCart) => itemInCart.id === item.id)) {
      /* el item ya existe */
    } else {
      let copyCart = [...cart];
      copyCart.push({ ...item, quantity: count });
      setCart(copyCart);
    }
  }

  function removeFromCart(id) {
    let filter = cart.filter((item) => item.id !== id);
    setCart(filter);
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}
