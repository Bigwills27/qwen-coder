import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, MapPin, Clock, CheckCircle } from 'lucide-react';
import './OrderReview.css';

function IndividualOrderReview() {
  const navigate = useNavigate();

  return (
    <div className="order-review">
      {/* Header */}
      <header className="page-header">
        <button onClick={() => navigate('/individual/order-setup')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h1>Order Review</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Main Content */}
      <main className="review-main">
        {/* Order Summary */}
        <section className="review-section">
          <h2>Order Summary</h2>
          <div className="summary-card">
            <div className="summary-item">
              <span className="label">Fuel Type</span>
              <span className="value">Regular Unleaded</span>
            </div>
            <div className="summary-item">
              <span className="label">Quantity</span>
              <span className="value">20 Liters</span>
            </div>
            <div className="summary-item">
              <span className="label">Price per Liter</span>
              <span className="value">$1.75</span>
            </div>
            <div className="summary-item total">
              <span className="label">Total</span>
              <span className="value">$35.00</span>
            </div>
          </div>
        </section>

        {/* Delivery Details */}
        <section className="review-section">
          <h2>Delivery Details</h2>
          <div className="detail-card">
            <div className="detail-item">
              <MapPin size={20} />
              <div>
                <h4>Delivery Address</h4>
                <p>123 Main Street, City</p>
              </div>
            </div>
            <div className="detail-item">
              <Clock size={20} />
              <div>
                <h4>Delivery Time</h4>
                <p>Deliver Now (Within 30 mins)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="review-section">
          <h2>Payment Method</h2>
          <div className="payment-card">
            <CreditCard size={24} />
            <div>
              <h4>Credit Card</h4>
              <p>**** **** **** 4242</p>
            </div>
          </div>
        </section>

        {/* Place Order Button */}
        <button 
          className="place-order-btn"
          onClick={() => navigate('/individual/live-tracking')}
        >
          <CheckCircle size={20} />
          Place Order
        </button>
      </main>
    </div>
  );
}

export default IndividualOrderReview;
