import React from "react";
import "./LoadingPlaceholder.css";

function LoadingPlaceholder() {
  return (
    <div className="LoadingPlaceholder bgVideo">
      <img src={'/Assets/logo/logo-main.png'} height={150} width={200} alt="logo" />
      <i className="fas fa-spinner fa-spin fa-2x"></i>
      {/* <div className="spinner"></div> */}
    </div>
  );
}

export default LoadingPlaceholder;
