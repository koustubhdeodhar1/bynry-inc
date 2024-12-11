import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ProfileDetails = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={profile.photo} alt={profile.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <p className="card-text">{profile.description}</p>
              <button className="btn btn-primary" onClick={handleShowMap}>
                {showMap ? "Hide Map" : "Show Map"}
              </button>
            </div>
          </div>
        </div>

        {/* Displaying the map if showMap is true */}
        {showMap && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Location</h5>
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    id="profile-details-map"
                    mapContainerStyle={{ width: "100%", height: "400px" }}
                    center={profile.address}
                    zoom={14}
                  >
                    <Marker position={profile.address} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
