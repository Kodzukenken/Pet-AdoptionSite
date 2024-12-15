import React, { useState, useEffect } from 'react';
import {
    fetchProfileData,
    putProfileData,
    fetchAdoptionRequest
} from "../services";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/user-context";
import Swal from "sweetalert2";

export default function Dash(){
    const { user, setUser } = useUser();
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [profileData, setProfileData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadDashboardData() {
            try {
                setIsLoading(true);

                // Fetch profile data
                const profile = await fetchProfileData(user.id);
                setProfileData(profile);

                // Fetch adoption requests
                const requests = await fetchAdoptionRequest(user.id); // Assuming fetchAdoptionRequest requires user ID
                setAdoptionRequests(requests);
            } catch (error) {
                Swal.fire({
                    title: "Error",
                    text: "Failed to load dashboard data",
                    icon: "error",
                });
            } finally {
                setIsLoading(false);
            }
        }

        loadDashboardData();
    }, [user.id]);

    const handleProfileUpdate = async (updatedProfile) => {
        try {
            const updatedData = await putProfileData(user.id, updatedProfile); // Assuming `putProfileData` requires user ID and updated profile
            setProfileData(updatedData);
            setUser((prev) => ({ ...prev, ...updatedData })); // Update the context with new profile data
            Swal.fire({
                title: "Success",
                text: "Profile updated successfully!",
                icon: "success",
            });
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Failed to update profile",
                icon: "error",
            });
        }
    };

    const handleViewAdoptionRequest = (requestId) => {
        navigate(`/adoption-requests/${requestId}`); // Navigate to detailed adoption request page
    };

    return (
        <div className="dashboard">
            <h1>Welcome, {profileData.name || "User"}!</h1>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Profile Section */}
                    <section>
                        <h2>Your Profile</h2>
                        <p><strong>Name:</strong> {profileData.name}</p>
                        <p><strong>Email:</strong> {profileData.email}</p>
                        <p><strong>Phone:</strong> {profileData.phone}</p>
                        <button onClick={() => navigate("/profile")}>Edit Profile</button>
                    </section>

                    {/* Adoption Requests Section */}
                    <section>
                        <h2>Your Adoption Requests</h2>
                        {adoptionRequests.length > 0 ? (
                            <ul>
                                {adoptionRequests.map((req) => (
                                    <li key={req.id}>
                                        <strong>{req.petName}</strong> - {req.status}
                                        <p>Requested on: {new Date(req.date).toLocaleDateString()}</p>
                                        <button onClick={() => handleViewAdoptionRequest(req.id)}>View Details</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No adoption requests found.</p>
                        )}
                    </section>

                    {/* Navigation to Other Features */}
                    <section>
                        <h2>Other Options</h2>
                        <button onClick={() => navigate("/pets/recommended")}>View Recommended Pets</button>
                        <button onClick={() => navigate("/adoption-requests")}>Submit a New Adoption Request</button>
                    </section>
                </>
            )}
        </div>
    );
}
