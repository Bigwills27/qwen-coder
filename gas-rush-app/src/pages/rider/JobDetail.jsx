import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Phone, MessageSquare, Package } from 'lucide-react';
import './JobDetail.css';

function RiderJobDetail() {
  const navigate = useNavigate();

  return (
    <div className="job-detail">
      {/* Header */}
      <header className="page-header rider">
        <button onClick={() => navigate('/rider/my-jobs')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h1>Job Details</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Main Content */}
      <main className="detail-main">
        {/* Job Status */}
        <section className="status-section">
          <div className="status-badge active">Active Job</div>
        </section>

        {/* Customer Info */}
        <section className="detail-section">
          <h2>Customer Information</h2>
          <div className="customer-card">
            <div className="customer-avatar">JD</div>
            <div className="customer-info">
              <h3>John Doe</h3>
              <p>+1 234 567 8900</p>
            </div>
            <div className="contact-actions">
              <button className="contact-btn">
                <Phone size={20} />
              </button>
              <button className="contact-btn">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Delivery Details */}
        <section className="detail-section">
          <h2>Delivery Details</h2>
          <div className="details-list">
            <div className="detail-item">
              <Package size={20} />
              <div>
                <h4>Fuel Type</h4>
                <p>Regular Unleaded</p>
              </div>
            </div>
            <div className="detail-item">
              <Package size={20} />
              <div>
                <h4>Quantity</h4>
                <p>20 Liters</p>
              </div>
            </div>
            <div className="detail-item">
              <DollarSign size={20} />
              <div>
                <h4>Payment</h4>
                <p>$35.00 (Paid)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="detail-section">
          <h2>Delivery Address</h2>
          <div className="location-card">
            <MapPin size={20} />
            <div>
              <h4>123 Main Street</h4>
              <p>City, State 12345</p>
            </div>
          </div>
        </section>

        {/* Time */}
        <section className="detail-section">
          <h2>Delivery Time</h2>
          <div className="time-card">
            <Clock size={20} />
            <div>
              <h4>Expected by 11:00 AM</h4>
              <p>Order placed at 10:30 AM</p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            className="navigate-btn"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            Navigate
          </button>
          <button 
            className="complete-btn"
            onClick={() => navigate('/rider/log-tag')}
          >
            Complete Delivery
          </button>
        </div>
      </main>
    </div>
  );
}

export default RiderJobDetail;
