import React from "react";
import ProfileList from "../components/ProfileList";

const HomePage = () => {
  return (
    <>
      <style>
        {`
          /* General Reset */
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
            'Helvetica Neue', sans-serif;
            background-color: #f9f9f9;
            color: #333;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1 {
            font-size: 2.5rem;
            color: #007bff; /* Professional blue */
            text-align: center;
            margin-bottom: 20px;
            font-weight: bold;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          /* Profile List */
          .profile-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          /* Button Styling */
          button {
            background-color: #007bff;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
          }

          button:hover {
            background-color: #0056b3;
          }

          button:focus {
            outline: none;
            box-shadow: 0 0 5px #007bff;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }

            .container {
              padding: 15px;
            }
          }
        `}
      </style>
      <div className="container mt-4">
        <h1>Profile Viewer</h1>
        <ProfileList />
      </div>
    </>
  );
};

export default HomePage;
