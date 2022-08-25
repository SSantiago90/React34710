import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import "./cartview.css";

function CartView() {
  const { cart, removeFromCart } = useContext(cartContext);

  return (
    <>
      <div className="main container mx-auto mt-5">
        <h1>Tu Carrito</h1>
        <table>
          <thead>
            <tr>
              <th>Miniatura</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Remover</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  total={item.price * item.quantity}
                  img={item.img}
                  quantity={item.quantity}
                  removeItem={() => removeFromCart(item.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Button onTouch={() => {}}>Finalizar Compra</Button>
        <Button type="alert">Vaciar Carrito</Button>
      </div>
    </>
  );
}

export default CartView;
