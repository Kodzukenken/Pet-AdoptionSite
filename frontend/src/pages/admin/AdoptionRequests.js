import React, { useState } from "react";
import adoptionRequests from "../../data/adoptionRequests";
import Sidebar from "../../components/admin/Sidebar";
import {
  updateAdoptionRequest
} from "../../services";
import "../../styles/adminDashboard.css";

const AdoptionRequests = () => {
  const [requests, setRequests] = useState(adoptionRequests);

  const processingRequests = requests.filter((req) => req.status === "Processing");
  const acceptedRequests = requests.filter((req) => req.status === "Accepted");
  const rejectedRequests = requests.filter((req) => req.status === "Rejected");

  const handleUpdateStatus = (id, newStatus) => {
    const updatedRequests = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
        <h1>Adoption Requests</h1>

        <section>
          <h2 className="section-title">Processing Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Pet</th>
                <th>Requester</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {processingRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.petName}</td>
                  <td>{req.requesterName}</td>
                  <td>{req.status}</td>
                  <td className="action-buttons">
                    <button className="accept" onClick={() => handleUpdateStatus(req.id, "Accepted")}>
                      Accept
                    </button>
                    <button className="reject" onClick={() => handleUpdateStatus(req.id, "Rejected")}>
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="section-title">Accepted Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Pet</th>
                <th>Requester</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {acceptedRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.petName}</td>
                  <td>{req.requesterName}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="section-title">Rejected Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Pet</th>
                <th>Requester</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rejectedRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.petName}</td>
                  <td>{req.requesterName}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AdoptionRequests;
