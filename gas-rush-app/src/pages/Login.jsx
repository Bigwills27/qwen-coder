import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (userType) => {
    if (userType === 'individual') {
      navigate('/individual/home');
    } else if (userType === 'rider') {
      navigate('/rider/home');
    } else if (userType === 'admin') {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>GasRush</h1>
        <p>Select your account type to continue</p>
      </div>
      
      <div className="login-options">
        <button 
          className="login-option individual"
          onClick={() => handleLogin('individual')}
        >
          <div className="option-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span>Individual</span>
        </button>

        <button 
          className="login-option rider"
          onClick={() => handleLogin('rider')}
        >
          <div className="option-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path>
              <path d="M12 15v4"></path>
              <path d="M8 21h8"></path>
              <path d="M5 16l-2 5h18l-2-5"></path>
            </svg>
          </div>
          <span>Rider</span>
        </button>

        <button 
          className="login-option admin"
          onClick={() => handleLogin('admin')}
        >
          <div className="option-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <span>Admin</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
