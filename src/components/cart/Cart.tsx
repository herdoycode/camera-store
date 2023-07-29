import { useCartStore } from "../../store";
import { VscChromeClose } from "react-icons/vsc";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useCartStore((s) => s.items);
  const handleCartOpen = useCartStore((s) => s.handleOpen);
  const handleRemove = useCartStore((s) => s.removeItem);
  const increment = useCartStore((s) => s.incQuantity);
  const decrement = useCartStore((s) => s.decQuantity);
  return (
    <div className="cart">
      <div className="cart-body">
        <div onClick={() => handleCartOpen()} className="close">
          <VscChromeClose />
        </div>
        <h2>
          {cartItems.length === 0
            ? "Your cart is empty!"
            : "Products in your cart"}
        </h2>
        {cartItems.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((c) => (
                <tr>
                  <td>
                    <img src={c.img} alt="" />
                  </td>
                  <td> {c.title} </td>
                  <td> {c.price} </td>
                  <td>
                    <button
                      disabled={c.quantity === 0}
                      onClick={() => decrement(c._id)}
                    >
                      -
                    </button>
                    <button>{c.quantity}</button>
                    <button
                      disabled={c.quantity === 10}
                      onClick={() => increment(c._id)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ fontSize: "12px", padding: "10px" }}
                      onClick={() => handleRemove(c._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
