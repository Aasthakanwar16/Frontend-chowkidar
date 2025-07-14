import React from 'react';
import './Home.css';

const Home = () => (
  <section className="container hero-box my-5 py-5 rounded">
    <div className="row align-items-center gx-5">
      {/* Left Column: Image */}
      <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
        <img
          src="/img/s.avif"
          alt="Smart Parking"
          className="img-fluid h-100 rounded-4 shadow-lg hero-img"
        />
      </div>

      {/* Right Column: Text + Button */}
      <div className="col-12 col-md-7 text-white text-center text-md-start">
        <h1 className="hero-title mb-3">Smart Parking</h1>
        <p className="hero-subtitle mb-4">
          Your one‑stop solution for easy parking—fast, secure, and effortless.
        </p>
      <div className="d-grid gap-2 text-center">
<div className="d-grid gap-2 col-10 col-sm-8 col-md-6 mx-auto ms-1">
  <button className="btn btn-orange btn-lg fw-semibold shadow w-100">
    EXPLORE PARKING
  </button>
</div>



        </div>
      </div>
    </div>
  </section>
);

export default Home;
