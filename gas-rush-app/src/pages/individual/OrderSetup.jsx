import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplet, Fuel, Gauge, Clock, MapPin } from 'lucide-react';
import './OrderSetup.css';

function IndividualOrderSetup() {
  const navigate = useNavigate();

  return (
    <div className="order-setup">
      {/* Header */}
      <header className="page-header">
        <button onClick={() => navigate('/individual/home')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h1>New Order</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Main Content */}
      <main className="setup-main">
        {/* Fuel Type Selection */}
        <section className="form-section">
          <h2>Select Fuel Type</h2>
          <div className="fuel-options">
            <label className="fuel-option">
              <input type="radio" name="fuelType" value="regular" defaultChecked />
              <div className="fuel-card">
                <Droplet size={32} />
                <span>Regular Unleaded</span>
              </div>
            </label>
            <label className="fuel-option">
              <input type="radio" name="fuelType" value="premium" />
              <div className="fuel-card">
                <Fuel size={32} />
                <span>Premium Unleaded</span>
              </div>
            </label>
            <label className="fuel-option">
              <input type="radio" name="fuelType" value="diesel" />
              <div className="fuel-card">
                <Gauge size={32} />
                <span>Diesel</span>
              </div>
            </label>
          </div>
        </section>

        {/* Quantity Selection */}
        <section className="form-section">
          <h2>Quantity (Liters)</h2>
          <div className="quantity-selector">
            <input type="number" defaultValue={20} min={5} max={100} className="quantity-input" />
            <div className="quantity-presets">
              <button type="button">10L</button>
              <button type="button">20L</button>
              <button type="button">30L</button>
              <button type="button">50L</button>
            </div>
          </div>
        </section>

        {/* Delivery Location */}
        <section className="form-section">
          <h2>Delivery Location</h2>
          <div className="location-input">
            <MapPin size={20} />
            <input type="text" placeholder="Enter delivery address" defaultValue="123 Main Street, City" />
          </div>
        </section>

        {/* Delivery Time */}
        <section className="form-section">
          <h2>Delivery Time</h2>
          <div className="time-options">
            <label className="time-option">
              <input type="radio" name="deliveryTime" value="now" defaultChecked />
              <div className="time-card">
                <Clock size={24} />
                <span>Deliver Now</span>
              </div>
            </label>
            <label className="time-option">
              <input type="radio" name="deliveryTime" value="schedule" />
              <div className="time-card">
                <Clock size={24} />
                <span>Schedule Later</span>
              </div>
            </label>
          </div>
        </section>

        {/* Continue Button */}
        <button 
          className="continue-btn"
          onClick={() => navigate('/individual/order-review')}
        >
          Continue to Review
        </button>
      </main>
    </div>
  );
}

export default IndividualOrderSetup;
