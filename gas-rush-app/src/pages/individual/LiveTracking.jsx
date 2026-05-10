import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import './LiveTracking.css';

function IndividualLiveTracking() {
  const navigate = useNavigate();

  return (
    <div className="live-tracking">
      {/* Header */}
      <header className="page-header">
        <button onClick={() => navigate('/individual/home')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h1>Live Tracking</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Map Section */}
      <section className="tracking-map">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Your Location</Popup>
          </Marker>
          <Marker position={[51.51, -0.1]}>
            <Popup>Rider - John D.</Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* Order Status Panel */}
      <section className="status-panel">
        <div className="status-header">
          <div className="status-badge active">On the Way</div>
          <span className="eta">ETA: 15 minutes</span>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className="step completed">
            <div className="step-dot"></div>
            <span>Order Confirmed</span>
          </div>
          <div className="step completed">
            <div className="step-dot"></div>
            <span>Rider Assigned</span>
          </div>
          <div className="step active">
            <div className="step-dot"></div>
            <span>On the Way</span>
          </div>
          <div className="step">
            <div className="step-dot"></div>
            <span>Delivered</span>
          </div>
        </div>

        {/* Rider Info */}
        <div className="rider-info">
          <div className="rider-avatar">JD</div>
          <div className="rider-details">
            <h3>John Doe</h3>
            <p>Toyota Camry • ABC 123</p>
          </div>
          <div className="rider-actions">
            <button className="action-btn">
              <Phone size={20} />
            </button>
            <button className="action-btn">
              <MessageSquare size={20} />
            </button>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="delivery-details">
          <div className="detail-row">
            <MapPin size={18} />
            <span>123 Main Street, City</span>
          </div>
          <div className="detail-row">
            <Clock size={18} />
            <span>20 Liters • Regular Unleaded</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndividualLiveTracking;
