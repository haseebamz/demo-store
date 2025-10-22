import React from "react";

function LoadingSpinner() {
  return (
    <> 
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center" >
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    </>
  );
}

export default LoadingSpinner;
