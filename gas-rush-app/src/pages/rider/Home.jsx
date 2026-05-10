import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Home, Package, LogOut, Bell, Fuel } from 'lucide-react';
import './RiderHome.css';

function RiderHome() {
  const navigate = useNavigate();

  return (
    <div className="rider-home">
      {/* Header */}
      <header className="app-header rider">
        <div className="header-content">
          <h1>GasRush Rider</h1>
          <nav className="header-nav">
            <button className="nav-btn">
              <Bell size={20} />
            </button>
            <button onClick={() => navigate('/')} className="nav-btn">
              <LogOut size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="rider-main">
        {/* Status Toggle */}
        <section className="status-section">
          <div className="status-toggle active">
            <span>Online</span>
            <div className="toggle-switch"></div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <Fuel size={24} />
            <div>
              <h3>5</h3>
              <p>Jobs Today</p>
            </div>
          </div>
          <div className="stat-card">
            <Package size={24} />
            <div>
              <h3>$125</h3>
              <p>Earnings</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h3>Nearby Requests</h3>
          <div className="map-container">
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '250px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]} />
              <Marker position={[51.51, -0.1]} />
            </MapContainer>
          </div>
        </section>

        {/* Available Jobs */}
        <section className="jobs-section">
          <h3>Available Jobs</h3>
          <div className="job-list">
            <div className="job-card" onClick={() => navigate('/rider/job-detail')}>
              <div className="job-header">
                <span className="job-distance">2.3 km away</span>
                <span className="job-price">$15.00</span>
              </div>
              <div className="job-body">
                <h4>Regular Unleaded - 20 Liters</h4>
                <p>123 Main Street, City</p>
              </div>
              <button className="accept-btn">Accept Job</button>
            </div>
            <div className="job-card">
              <div className="job-header">
                <span className="job-distance">3.5 km away</span>
                <span className="job-price">$25.00</span>
              </div>
              <div className="job-body">
                <h4>Premium Diesel - 50 Liters</h4>
                <p>456 Oak Avenue, Town</p>
              </div>
              <button className="accept-btn">Accept Job</button>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/rider/home')} className="nav-item active">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button onClick={() => navigate('/rider/my-jobs')} className="nav-item">
          <Package size={20} />
          <span>My Jobs</span>
        </button>
      </nav>
    </div>
  );
}

export default RiderHome;
