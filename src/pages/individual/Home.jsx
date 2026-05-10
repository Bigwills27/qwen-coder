import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Home, ShoppingBag, Package, User, MapPin } from 'lucide-react';
import './Home.css';

function IndividualHome() {
  const navigate = useNavigate();

  return (
    <div className="individual-home">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>GasRush</h1>
          <nav className="header-nav">
            <button onClick={() => navigate('/individual/home')} className="nav-btn active">
              <Home size={20} />
            </button>
            <button onClick={() => navigate('/individual/my-orders')} className="nav-btn">
              <Package size={20} />
            </button>
            <button onClick={() => navigate('/individual/profile')} className="nav-btn">
              <User size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="home-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Welcome Back!</h2>
          <p>Order gas delivery to your location</p>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <button 
            className="action-card primary"
            onClick={() => navigate('/individual/order-setup')}
          >
            <ShoppingBag size={32} />
            <span>New Order</span>
          </button>
          <button 
            className="action-card"
            onClick={() => navigate('/individual/my-orders')}
          >
            <Package size={32} />
            <span>My Orders</span>
          </button>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h3>Nearby Stations</h3>
          <div className="map-container">
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>Gas Station A</Popup>
              </Marker>
              <Marker position={[51.51, -0.1]}>
                <Popup>Gas Station B</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="recent-orders">
          <h3>Recent Orders</h3>
          <div className="order-list">
            <div className="order-item" onClick={() => navigate('/individual/live-tracking')}>
              <div className="order-icon">
                <Package size={24} />
              </div>
              <div className="order-info">
                <h4>Regular Unleaded</h4>
                <p>20 Liters • $35.00</p>
              </div>
              <div className="order-status">
                <span className="status-badge delivered">Delivered</span>
              </div>
            </div>
            <div className="order-item">
              <div className="order-icon">
                <Package size={24} />
              </div>
              <div className="order-info">
                <h4>Premium Diesel</h4>
                <p>50 Liters • $85.00</p>
              </div>
              <div className="order-status">
                <span className="status-badge pending">Pending</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/individual/home')} className="nav-item active">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button onClick={() => navigate('/individual/my-orders')} className="nav-item">
          <Package size={20} />
          <span>Orders</span>
        </button>
        <button onClick={() => navigate('/individual/profile')} className="nav-item">
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default IndividualHome;
