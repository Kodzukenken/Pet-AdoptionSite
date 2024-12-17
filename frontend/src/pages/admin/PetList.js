import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminDashboard.css";
import { Link } from "react-router-dom";
import { 
  fetchAllPets,
  createNewPet
 } from "../../services";

const API_URL = "http://localhost:8081/api/pets";

const PetList = () => {
  const [pets, setPets] = useState([]); // Pets list
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // State for adding a new pet
  const [newPet, setNewPet] = useState({
    name: "",
    typeId: 1,
    breed: "",
    age: "",
    image: null, // Image file for upload
  });

  // States for editing a pet
  const [editingPet, setEditingPet] = useState(null);
  const [updatedPet, setUpdatedPet] = useState({});

  // Fetch all pets from backend
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

  // Handle input change for adding/editing a pet
  const handleInputChange = (e, isUpdate = false) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const stateUpdater = isUpdate ? setUpdatedPet : setNewPet;
      stateUpdater((prev) => ({ ...prev, image: files[0] }));
    } else {
      const stateUpdater = isUpdate ? setUpdatedPet : setNewPet;
      stateUpdater((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add a new pet
  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newPet.name);
    formData.append("typeId", newPet.typeId);
    formData.append("breed", newPet.breed);
    formData.append("age", newPet.age);
    formData.append("image", newPet.image);

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPets([...pets, response.data]); // Add new pet to list
      setNewPet({ name: "", typeId: 1, breed: "", age: "", image: null }); // Reset form
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  // Edit a pet
  const handleEdit = (pet) => {
    setEditingPet(pet.id);
    setUpdatedPet({
      ...pet,
      image: null, // Reset image file for update
    });
  };

  // Save the updated pet
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", updatedPet.name);
    formData.append("typeId", updatedPet.typeId);
    formData.append("breed", updatedPet.breed);
    formData.append("age", updatedPet.age);
    if (updatedPet.image) {
      formData.append("image", updatedPet.image); // Only send image if a new file was selected
    }

    try {
      const response = await axios.put(`${API_URL}/${editingPet}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const updatedPets = pets.map((pet) =>
        pet.id === editingPet ? response.data : pet
      );
      setPets(updatedPets);
      setEditingPet(null); // Exit editing mode
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingPet(null);
  };

  // Delete a pet
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPets(pets.filter((pet) => pet.id !== id)); // Remove pet from state
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
          <h3>🐾 Add a New Pet</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPet.name}
            onChange={handleInputChange}
            required
          />
          <select name="typeId" value={newPet.typeId} onChange={handleInputChange}>
            <option value={1}>Dog</option>
            <option value={2}>Cat</option>
          </select>
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
            type="file"
            name="image"
            accept="image/*"
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
                      src={
                        pet.path
                          ? `http://localhost:8080/${pet.path}`
                          : "https://via.placeholder.com/50"
                      }
                      alt={pet.name}
                      style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                    />
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.petType}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.age}</td>
                  <td>
                    <button onClick={() => handleEdit(pet)}>Edit</button>
                    <button onClick={() => handleDelete(pet.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Edit Pet Form */}
        {editingPet && (
          <div className="update-form">
            <h3>Update Pet</h3>
            <input
              type="text"
              name="name"
              value={updatedPet.name}
              onChange={(e) => handleInputChange(e, true)}
              placeholder="Name"
            />
            <select
              name="typeId"
              value={updatedPet.typeId}
              onChange={(e) => handleInputChange(e, true)}
            >
              <option value={1}>Dog</option>
              <option value={2}>Cat</option>
            </select>
            <input
              type="text"
              name="breed"
              value={updatedPet.breed}
              onChange={(e) => handleInputChange(e, true)}
              placeholder="Breed"
            />
            <input
              type="number"
              name="age"
              value={updatedPet.age}
              onChange={(e) => handleInputChange(e, true)}
              placeholder="Age"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => handleInputChange(e, true)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetList;
