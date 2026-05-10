import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Upload } from 'lucide-react';
import './LogTag.css';

function RiderLogTag() {
  const navigate = useNavigate();

  return (
    <div className="log-tag">
      {/* Header */}
      <header className="page-header rider">
        <button onClick={() => navigate('/rider/job-detail')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h1>Log Delivery</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Main Content */}
      <main className="log-main">
        {/* Photo Upload Section */}
        <section className="upload-section">
          <h2>Delivery Proof</h2>
          <p>Take a photo of the delivered gas at the customer's location</p>
          
          <div className="upload-area">
            <Camera size={48} />
            <p>Tap to take photo or upload</p>
            <button className="upload-btn">
              <Upload size={20} />
              Choose from Gallery
            </button>
          </div>
        </section>

        {/* Notes Section */}
        <section className="notes-section">
          <h2>Delivery Notes</h2>
          <textarea 
            placeholder="Add any notes about the delivery..."
            rows={4}
          ></textarea>
        </section>

        {/* Signature Section */}
        <section className="signature-section">
          <h2>Customer Signature</h2>
          <div className="signature-pad">
            <p>Signature will appear here</p>
          </div>
        </section>

        {/* Submit Button */}
        <button 
          className="submit-btn"
          onClick={() => navigate('/rider/order-complete')}
        >
          Complete & Submit
        </button>
      </main>
    </div>
  );
}

export default RiderLogTag;
