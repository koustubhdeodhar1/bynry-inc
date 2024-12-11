import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = ({ address }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAZNgiRcRlRmufqgcA1YYBiRN2Shc23B_o",
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={address} zoom={10}>
      <Marker position={address} />
    </GoogleMap>
  );
};

export default MapComponent;
