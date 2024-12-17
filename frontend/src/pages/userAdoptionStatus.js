import React, { useEffect, useState } from "react";
import "../styles/userDashboard.css"; // Assuming styles are here

const mockRequests = [
  { id: 1, petName: "Whiskers", requesterName: "John Doe", status: "Processing" },
  { id: 2, petName: "Buddy", requesterName: "John Doe", status: "Accepted" },
  { id: 3, petName: "Luna", requesterName: "John Doe", status: "Rejected" },
];

const useAdoptionStatus = () => {
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const userName = "John Doe"; // Replace with user context/login data

  // Simulate API call to fetch data
  useEffect(() => {
    // Filter data for the current user
    const userRequests = mockRequests.filter(
      (request) => request.requesterName === userName
    );
    setAdoptionRequests(userRequests);
  }, []);

  return (
    <div className="user-adoption-status">
      <h1>Your Adoption Requests</h1>
      {adoptionRequests.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {adoptionRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.petName}</td>
                <td
                  className={`status ${
                    request.status === "Accepted"
                      ? "status-accepted"
                      : request.status === "Rejected"
                      ? "status-rejected"
                      : "status-processing"
                  }`}
                >
                  {request.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No adoption requests found.</p>
      )}
    </div>
  );
};

export default useAdoptionStatus;
