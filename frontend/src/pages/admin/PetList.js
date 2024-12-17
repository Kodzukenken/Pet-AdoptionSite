import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminDashboard.css";

const API_URL = "http://localhost:8080/api/pets"; // Backend API endpoint

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // State for adding a new pet
  const [newPet, setNewPet] = useState({
    name: "",
    typeId: "",
    breed: "",
    age: "",
    path: "",
  });

  // State for editing pets
  const [editingPet, setEditingPet] = useState(null);
  const [updatedPet, setUpdatedPet] = useState({});

  // Fetch all pets
  const fetchPets = async () => {
    try {
      const response = await axios.get(API_URL);
      setPets(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Handle input change for forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPet({ ...updatedPet, [name]: value });
  };

  // Add a new pet
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newPet);
      setPets([...pets, response.data]);
      setNewPet({ name: "", typeId: "", breed: "", age: "", path: "" });
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  // Edit a pet
  const handleEdit = (pet) => {
    setEditingPet(pet.id);
    setUpdatedPet({ ...pet });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`${API_URL}/${editingPet}`, updatedPet);
      const updatedPets = pets.map((pet) =>
        pet.id === editingPet ? response.data : pet
      );
      setPets(updatedPets);
      setEditingPet(null);
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  const handleCancel = () => {
    setEditingPet(null);
  };

  // Delete a pet
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPets(pets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
        <h1>All Pets</h1>

        {/* Add Pet Form */}
        <form onSubmit={handleCreate} className="create-form">
          <h3 className="form-heading">🐾 Add a New Pet</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPet.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="typeId"
            placeholder="Type ID (1 = Dog, 2 = Cat)"
            value={newPet.typeId}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={newPet.breed}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newPet.age}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="path"
            placeholder="Image URL"
            value={newPet.path}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Pet</button>
        </form>

        {/* Pets Table */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Type</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id}>
                  <td>
                    <img
                      src={pet.path || "https://via.placeholder.com/50"}
                      alt={pet.name}
                      style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                    />
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.typeId === 1 ? "Dog" : "Cat"}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.age}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(pet)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(pet.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Update Form */}
        {editingPet && (
          <div className="update-form">
            <h3>Update Pet</h3>
            <input
              type="text"
              name="name"
              value={updatedPet.name}
              onChange={handleUpdateChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="typeId"
              value={updatedPet.typeId}
              onChange={handleUpdateChange}
              placeholder="Type ID (1 = Dog, 2 = Cat)"
            />
            <input
              type="text"
              name="breed"
              value={updatedPet.breed}
              onChange={handleUpdateChange}
              placeholder="Breed"
            />
            <input
              type="number"
              name="age"
              value={updatedPet.age}
              onChange={handleUpdateChange}
              placeholder="Age"
            />
            <input
              type="text"
              name="path"
              value={updatedPet.path}
              onChange={handleUpdateChange}
              placeholder="Image URL"
            />
            <div className="update-form-buttons">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetList;
