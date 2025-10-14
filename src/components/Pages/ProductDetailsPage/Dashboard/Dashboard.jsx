import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider";

function Dashboard() {
  const { user } = useContext(AuthContext); // 👈 get user from context

  if (!user) {
    return <p>Loading user data...</p>; // or redirect to login if needed
  }

 


  return (
    <div className="container" >
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Dashboard;
