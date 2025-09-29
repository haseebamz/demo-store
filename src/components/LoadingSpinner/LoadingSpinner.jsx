import React from "react";

function LoadingSpinner() {
  return (
    <> 
    <div className="w-100 h-100 " >
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    </>
  );
}

export default LoadingSpinner;
