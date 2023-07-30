import { useCartStore } from "../../store";
import { VscChromeClose } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useCartStore((s) => s.items);
  const handleCartOpen = useCartStore((s) => s.handleOpen);
  const handleRemove = useCartStore((s) => s.removeItem);
  const increment = useCartStore((s) => s.incQuantity);
  const decrement = useCartStore((s) => s.decQuantity);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

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
          <>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
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
                    <td> ${c.price} </td>
                    <td>
                      <div className="quantity-control">
                        <button
                          disabled={c.quantity === 1}
                          onClick={() => decrement(c._id)}
                        >
                          -
                        </button>
                        <div className="quantity">{c.quantity}</div>
                        <button
                          disabled={c.quantity === 10}
                          onClick={() => increment(c._id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn-close"
                        onClick={() => handleRemove(c._id)}
                      >
                        <IoCloseOutline className="icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <span className="total">Subtotal=</span>
                  </td>
                  <td>
                    <span className="total">${subtotal}</span>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            <button className="btn-checkout">Check Out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
