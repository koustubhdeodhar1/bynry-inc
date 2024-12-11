import React, { useState, useRef } from "react";
import MapComponent from "./MapComponent";

const profiles = [
  {
    id: 1,
    name: "Koustubh Deodhar",
    description: "Software Developer",
    photo: "https://via.placeholder.com/150",
    bio: "A tech enthusiast who loves solving complex problems with clean code. Passionate about AI, machine learning, and building scalable systems. When not coding, you’ll find me exploring new technologies or gaming.",
    address: { lat: 18.520792, lng: 73.77802 },
  },
  {
    id: 2,
    name: "Jayesh Mehta",
    description: "Graphic Designer",
    photo: "https://via.placeholder.com/150",
    bio: "Creative mind with a passion for design and visual storytelling. I believe design is more than just aesthetics – it’s about creating experiences. In my free time, I’m either sketching or enjoying some good coffee!",
    address: { lat: 18.557611, lng: 73.806535 },
  },
  {
    id: 3,
    name: "Pooja Sharma",
    description: "Software Tester",
    photo: "https://via.placeholder.com/150",
    bio: "I love breaking things (in a good way)! Software testing is my superpower, ensuring bug-free and smooth user experiences. When I’m not testing, I’m either binge-watching thrillers or exploring new cuisines.",
    address: { lat: 18.5599, lng: 73.934049 },
  },
  {
    id: 4,
    name: "Ajay Rao",
    description: "UX Designer",
    photo: "https://via.placeholder.com/150",
    bio: "I create intuitive and delightful user experiences. My goal is to make every interaction with technology as seamless as possible. Outside of work, I love photography, hiking, and exploring hidden gems in the city.",
    address: { lat: 51.5072, lng: 51.5072 },
  },
  {
    id: 5,
    name: "Rohan Reddy",
    description: "Penetration Tester",
    photo: "https://via.placeholder.com/150",
    bio: "I break into systems (with permission, of course)! As a penetration tester, my mission is to make the web a safer place. When I’m not hacking, I’m deep into cybersecurity research or exploring nature trails.",
    address: { lat: 54.5072, lng: 51.5072 },
  },
  {
    id: 6,
    name: "Alisha Pandey",
    description: "Human Resource Specialist",
    photo: "https://via.placeholder.com/150",
    bio: "People are my passion! I help organizations build amazing teams and nurture talent. Outside work, I enjoy yoga, reading, and organizing weekend get-togethers with friends and family.",
    address: { lat: 14.5072, lng: 32.5072 },
  },
  // Other profiles...
];

const ProfileList = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBio, setSelectedBio] = useState("");
  const mapRef = useRef(null);
  const bioRef = useRef(null);

  const handleSummary = (address) => {
    setSelectedAddress(address);
    setTimeout(() => {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleDetails = (bio) => {
    setSelectedBio(bio);
    setTimeout(() => {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <style>
        {`
          .profile-card {
            padding: 15px;
            margin: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .profile-card img {
            border-radius: 50%;
            margin-bottom: 10px;
          }

          .profile-card h3 {
            color: #ff1493; /* Pink color for the name */
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .profile-card p {
            margin: 5px 0;
            font-size: 1rem;
            color: #333;
          }

          .profile-card button {
            margin: 5px;
            padding: 8px 15px;
            font-size: 0.9rem;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
          }

          .profile-card button:hover {
            background-color: #0056b3;
          }

          .bio-card, .map-card {
            padding: 15px;
            margin: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #f8f9fa;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            font-size: 1rem;
            color: #333;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .col-md-4 {
            flex: 1 0 30%;
            max-width: 30%;
            margin: 10px;
          }

          @media (max-width: 768px) {
            .col-md-4 {
              flex: 1 0 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
      <div className="row">
        {profiles.map((profile) => (
          <div key={profile.id} className="col-md-4">
            <div className="profile-card">
              <img src={profile.photo} alt={`${profile.name}'s avatar`} />
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <button onClick={() => handleSummary(profile.address)}>
                Summary
              </button>
              <button onClick={() => handleDetails(profile.bio)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedAddress && (
        <div ref={mapRef} className="map-card">
          <MapComponent address={selectedAddress} />
        </div>
      )}
      {selectedBio && (
        <div ref={bioRef} className="bio-card">
          <p>{selectedBio}</p>
          <button onClick={() => setSelectedBio("")}>Close</button>
        </div>
      )}
    </>
  );
};

export default ProfileList;
