import React, { useState } from "react";
import { FaBoxOpen, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import type { CartItem } from "../../Component/Cart/carttypes.ts";
import "./cart.css"; // Import CSS

interface Props {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClearCart: () => void;
}

const Cart: React.FC<Props> = ({ cart, onRemove, onUpdateQuantity, onClearCart }) => {
  const [notification, setNotification] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 10000 ? 0 : 700;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      onRemove(id);
      showNotification("Item removed from cart");
    } else {
      onUpdateQuantity(id, quantity);
    }
  };

  const removeItem = (id: number, name: string) => {
    onRemove(id);
    showNotification(`${name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    showNotification("Order placed successfully! 🎉");
    setTimeout(() => {
      onClearCart();
    }, 1000);
  };
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  return (
    <>
      <main className="main-cart">
        {/* Notification */}
        {notification && (
          <div className={`cart-notification animate`} key={notification}>
            {notification}
          </div>
        )}

        <section className="cart-container">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FaBoxOpen size={100} color="rgba(255, 204, 0)" />
              <h1>Your cart is empty.</h1>
              <p>Looks like you haven't added any delicious items to your cart yet.</p>
              <button onClick={() => window.location.href = '/menu'}>Browse Menu</button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="cart-header">
                <h1>Your Cart</h1>
                <p>{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
              </div>

              <div className="cart-grid">
                {/* Cart Items */}
                <div>
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-row">
                        {/* Item Image */}
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="cart-item-image"
                        />

                        {/* Item Details */}
                        <div className="cart-item-details">
                          <h3>{item.name}</h3>
                          <p className="cart-item-description">
                            {item.description}
                          </p>
                          <p className="cart-item-price">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="cart-qty-controls">
                          <div className="cart-qty-group">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="cart-qty-btn cart-qty-minus"
                            >
                              <FaMinus size={12} />
                            </button>
                            <span className="cart-qty-value">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="cart-qty-btn cart-qty-plus"
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id, item.name)}
                            className="cart-remove-btn"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Item Subtotal */}
                      <div className="cart-item-subtotal">
                        <span className="cart-item-subtotal-label">Subtotal:</span>
                        <span className="cart-item-subtotal-value">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div>
                  <div className="cart-summary">
                    <h2 className="cart-summary-title">
                      Order Summary
                    </h2>

                    <div className="cart-summary-details">
                      <div className="cart-summary-row">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="cart-summary-row">
                        <span>Delivery Fee:</span>
                        <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                      </div>
                      <div className="cart-summary-row">
                        <span>Tax:</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="cart-summary-total">
                        <span>Total:</span>
                        <span className="cart-summary-total-value">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Free Delivery Notice */}
                    {subtotal < 25 && (
                      <div className="cart-free-delivery">
                        <p className="cart-free-delivery-text">
                          Add ${(25 - subtotal).toFixed(2)} more for free delivery!
                        </p>
                      </div>
                    )}

                    {/* Checkout Button */}
                    <button
                      onClick={handleCheckout}
                      className="cart-checkout-btn"
                    >
                      Checkout
                    </button>

                    {/* Continue Shopping */}
                    <button
                      onClick={() => window.location.href = '/menu'}
                      className="cart-continue-btn"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Cart;