import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  // Calculate the total price of courses in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePay = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <h3 className="total-price">Total: ${total}</h3>
          <button className="pay-button" onClick={handlePay}>
            Proceed to Pay
          </button>
        </div>
      )}
      <style jsx>{`
        .cart-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .empty-cart {
          text-align: center;
          color: #888;
          font-size: 16px;
        }

        .cart-list {
          list-style-type: none;
          padding: 0;
          margin: 20px 0;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border-bottom: 1px solid #ddd;
          font-size: 16px;
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .total-price {
          text-align: right;
          font-size: 18px;
          font-weight: bold;
          margin-top: 20px;
          color: #333;
        }

        .pay-button {
          display: block;
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .pay-button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .cart-container {
            padding: 15px;
          }

          .pay-button {
            font-size: 14px;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
