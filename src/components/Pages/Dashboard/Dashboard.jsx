import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { user } = useContext(AuthContext); // 👈 get user from context

  if (!user) {
    return <p>Loading user data...</p>; // or redirect to login if needed
  }

  return (
    <div className="container">
      <h2 className={styles.heading}>
        Welcome, {user.name.firstname} {user.name.lastname}!
      </h2>

      <p className={styles.username}>
        <strong>Username:</strong> {user.username}
      </p>

      <p className={styles.email}>
        <strong>Email:</strong> {user.email}
      </p>

      <p className={styles.phone}>
        <strong>Phone:</strong> {user.phone}
      </p>

      <div className={styles.addressSection}>
        <h3>Address</h3>
        <p>
          {user.address.number} {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
{/* 
        <div className={styles.geoSection}>
          <p>Latitude: {user.address.geolocation.lat}</p>
          <p>Longitude: {user.address.geolocation.long}</p>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
