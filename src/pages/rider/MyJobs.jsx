import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, MapPin, Clock, DollarSign, Phone, MessageSquare } from 'lucide-react';
import './MyJobs.css';

function RiderMyJobs() {
  const navigate = useNavigate();

  const jobs = [
    { id: 1, fuel: 'Regular Unleaded', quantity: '20 Liters', price: '$15.00', status: 'active', customer: 'John Doe', address: '123 Main St', time: '10:30 AM' },
    { id: 2, fuel: 'Premium Diesel', quantity: '50 Liters', price: '$25.00', status: 'completed', customer: 'Jane Smith', address: '456 Oak Ave', time: '9:15 AM' },
    { id: 3, fuel: 'Regular Unleaded', quantity: '30 Liters', price: '$18.00', status: 'pending', customer: 'Bob Wilson', address: '789 Pine Rd', time: '11:00 AM' },
  ];

  return (
    <div className="my-jobs">
      {/* Header */}
      <header className="page-header rider">
        <button onClick={() => navigate('/rider/home')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h1>My Jobs</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Main Content */}
      <main className="jobs-main">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button className="tab active">All</button>
          <button className="tab">Active</button>
          <button className="tab">Pending</button>
          <button className="tab">Completed</button>
        </div>

        {/* Jobs List */}
        <div className="jobs-list">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="job-card"
              onClick={() => navigate('/rider/job-detail')}
            >
              <div className="job-header">
                <span className="job-id">Job #{job.id}</span>
                <span className={`status-badge ${job.status}`}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
              </div>
              
              <div className="job-body">
                <div className="job-info">
                  <h3>{job.fuel}</h3>
                  <p>{job.quantity}</p>
                </div>
                <div className="job-price">
                  <DollarSign size={16} />
                  <span>{job.price}</span>
                </div>
              </div>

              <div className="job-footer">
                <div className="job-meta">
                  <MapPin size={14} />
                  <span>{job.address}</span>
                </div>
                <div className="job-meta">
                  <Clock size={14} />
                  <span>{job.time}</span>
                </div>
              </div>

              {job.status === 'active' && (
                <div className="job-actions">
                  <button className="action-btn">
                    <Phone size={18} />
                  </button>
                  <button className="action-btn">
                    <MessageSquare size={18} />
                  </button>
                  <button className="complete-btn">Complete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default RiderMyJobs;
