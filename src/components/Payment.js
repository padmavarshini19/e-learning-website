import React from 'react';

const Payment = ({ cartItems }) => {
  // Calculate the total price of courses in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p className="total-amount">Total Amount to Pay: <strong>${total}</strong></p>
      <button className="pay-now-button" onClick={() => alert("Payment Successful")}>
        Pay Now
      </button>
      <style jsx>{`
        .payment-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }

        .total-amount {
          font-size: 18px;
          color: #555;
          margin-bottom: 30px;
        }

        .pay-now-button {
          display: inline-block;
          padding: 12px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .pay-now-button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .payment-container {
            padding: 15px;
          }

          h2 {
            font-size: 22px;
          }

          .total-amount {
            font-size: 16px;
          }

          .pay-now-button {
            font-size: 14px;
            padding: 10px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Payment;
