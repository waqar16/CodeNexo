import React from 'react';
import './Careers.css'; // Import custom CSS for styling

function Careers() {
  return (
    <div className="container my-5">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Careers</h2>
          <p className="display-5 mb-4 mb-md-5 text-center">Explore our exciting job opportunities and enhance your career.</p>
        </div>
      </div>
      <div className="job-section">
        {/* Job cards */}
        <div className="row">
          <div className="col-md-4">
            <div className="job-card">
              <div className="job-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Full Stack Developer</h3>
              <p>We are seeking a talented Full Stack Developer to join our dynamic team...</p>
              <p><strong>No. of Positions:</strong> 1</p>
              <a href="mailto: sales.codenexo@gmail.com" className="btn btn-custom">Apply Now</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-card">
              <div className="job-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Sales Executive</h3>
              <p>We are looking for a motivated Sales Executive to join our sales team...</p>
              <p><strong>No. of Positions:</strong> 1</p>
              <a href="mailto: sales.codenexo@gmail.com" className="btn btn-custom">Apply Now</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-card">
              <div className="job-icon"><i className="fas fa-paint-brush"></i></div>
              <h3>UI/UX Designer</h3>
              <p>Join our creative team as a UI/UX designer and help shape the user experience...</p>
              <p><strong>No. of Positions:</strong> 1</p>
              <a href="mailto: sales.codenexo@gmail.com" className="btn btn-custom">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
