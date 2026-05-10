import { useNavigate } from 'react-router-dom';
import { Home, Package, User, Clock, MapPin, DollarSign } from 'lucide-react';
import './MyOrders.css';

function IndividualMyOrders() {
  const navigate = useNavigate();

  const orders = [
    { id: 1, fuel: 'Regular Unleaded', quantity: '20 Liters', price: '$35.00', status: 'delivered', date: 'May 8, 2024' },
    { id: 2, fuel: 'Premium Diesel', quantity: '50 Liters', price: '$85.00', status: 'in-progress', date: 'May 9, 2024' },
    { id: 3, fuel: 'Regular Unleaded', quantity: '30 Liters', price: '$52.50', status: 'pending', date: 'May 10, 2024' },
  ];

  return (
    <div className="my-orders">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>My Orders</h1>
          <nav className="header-nav">
            <button onClick={() => navigate('/individual/home')} className="nav-btn">
              <Home size={20} />
            </button>
            <button onClick={() => navigate('/individual/my-orders')} className="nav-btn active">
              <Package size={20} />
            </button>
            <button onClick={() => navigate('/individual/profile')} className="nav-btn">
              <User size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="orders-main">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button className="tab active">All</button>
          <button className="tab">Pending</button>
          <button className="tab">In Progress</button>
          <button className="tab">Completed</button>
        </div>

        {/* Orders List */}
        <div className="orders-list">
          {orders.map((order) => (
            <div 
              key={order.id} 
              className="order-card"
              onClick={() => navigate('/individual/live-tracking')}
            >
              <div className="order-header">
                <span className="order-id">#{order.id}</span>
                <span className={`status-badge ${order.status}`}>
                  {order.status === 'delivered' ? 'Delivered' : 
                   order.status === 'in-progress' ? 'In Progress' : 'Pending'}
                </span>
              </div>
              
              <div className="order-body">
                <div className="order-info">
                  <h3>{order.fuel}</h3>
                  <p>{order.quantity}</p>
                </div>
                <div className="order-price">
                  <DollarSign size={16} />
                  <span>{order.price}</span>
                </div>
              </div>

              <div className="order-footer">
                <div className="order-meta">
                  <Clock size={14} />
                  <span>{order.date}</span>
                </div>
                <div className="order-meta">
                  <MapPin size={14} />
                  <span>123 Main Street</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/individual/home')} className="nav-item">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button onClick={() => navigate('/individual/my-orders')} className="nav-item active">
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

export default IndividualMyOrders;
