import { useNavigate } from 'react-router-dom';
import { Home, Package, User, Settings, LogOut, Bell, CreditCard, MapPin } from 'lucide-react';
import './Profile.css';

function IndividualProfile() {
  const navigate = useNavigate();

  return (
    <div className="profile">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>Profile</h1>
          <nav className="header-nav">
            <button onClick={() => navigate('/individual/home')} className="nav-btn">
              <Home size={20} />
            </button>
            <button onClick={() => navigate('/individual/my-orders')} className="nav-btn">
              <Package size={20} />
            </button>
            <button onClick={() => navigate('/individual/profile')} className="nav-btn active">
              <User size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        {/* Profile Info */}
        <section className="profile-info">
          <div className="avatar">JD</div>
          <h2>John Doe</h2>
          <p>john.doe@email.com</p>
        </section>

        {/* Menu Items */}
        <section className="menu-section">
          <div className="menu-item">
            <User size={20} />
            <span>Personal Information</span>
          </div>
          <div className="menu-item">
            <MapPin size={20} />
            <span>Saved Addresses</span>
          </div>
          <div className="menu-item">
            <CreditCard size={20} />
            <span>Payment Methods</span>
          </div>
          <div className="menu-item">
            <Bell size={20} />
            <span>Notifications</span>
          </div>
          <div className="menu-item">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </section>

        {/* Logout Button */}
        <button 
          className="logout-btn"
          onClick={() => navigate('/')}
        >
          <LogOut size={20} />
          Logout
        </button>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/individual/home')} className="nav-item">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button onClick={() => navigate('/individual/my-orders')} className="nav-item">
          <Package size={20} />
          <span>Orders</span>
        </button>
        <button onClick={() => navigate('/individual/profile')} className="nav-item active">
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default IndividualProfile;
