import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Package } from 'lucide-react';
import './OrderComplete.css';

function RiderOrderComplete() {
  const navigate = useNavigate();

  return (
    <div className="order-complete">
      {/* Success Icon */}
      <div className="success-section">
        <div className="success-icon">
          <CheckCircle size={80} />
        </div>
        <h1>Delivery Complete!</h1>
        <p>Thank you for your service</p>
      </div>

      {/* Summary */}
      <section className="summary-section">
        <h2>Job Summary</h2>
        <div className="summary-card">
          <div className="summary-item">
            <span className="label">Earnings</span>
            <span className="value">$15.00</span>
          </div>
          <div className="summary-item">
            <span className="label">Distance</span>
            <span className="value">5.2 km</span>
          </div>
          <div className="summary-item">
            <span className="label">Time</span>
            <span className="value">25 mins</span>
          </div>
          <div className="summary-item total">
            <span className="label">Today's Total</span>
            <span className="value">$125.00</span>
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="action-buttons">
        <button 
          className="home-btn"
          onClick={() => navigate('/rider/home')}
        >
          <Home size={20} />
          Back to Home
        </button>
        <button 
          className="jobs-btn"
          onClick={() => navigate('/rider/my-jobs')}
        >
          <Package size={20} />
          View My Jobs
        </button>
      </div>
    </div>
  );
}

export default RiderOrderComplete;
