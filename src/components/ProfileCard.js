import React, { useState } from "react";
import "./ProfileCard.css"; // Import custom CSS for styles

const ProfileCard = ({ profile, onSummary }) => {
  // State to toggle the visibility of the bio
  const [showBio, setShowBio] = useState(false);

  // Toggle bio visibility
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div className="card profile-card">
      <img
        src="https://drive.google.com/uc?export=view&id=1u-5fsUeC1V5qvM6528SMp5kgfXw9tWf8" // Google Drive image link
        alt={profile.name}
        className="card-img-top rounded-top"
      />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.description}</p>
        
        {/* Summary and Description buttons */}
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-summary"
            onClick={() => onSummary(profile.address)}
          >
            Summary
          </button>
          <button
            className="btn btn-description"
            onClick={toggleBio}
          >
            Description
          </button>
        </div>

        {/* Show Bio data if 'showBio' state is true */}
        {showBio && (
          <div className="mt-3 bio-text">
            <h6>Bio Data:</h6>
            <p>{profile.bio}</p> {/* Assuming `bio` is part of the profile data */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
