import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminDashboard.css";
import { Link } from "react-router-dom";
import { 
  fetchAllPets,
  createNewPet,
  updatePet,
  deletePet
 } from "../../services";

const API_URL = "http://localhost:8081/api/pets";

const PetList = () => {
  const [pets, setPets] = useState([]); // Pets list
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // State for adding a new pet
  const [newPet, setNewPet] = useState({});
  const [name, setName] = useState("");
  const [typeId, setTypeId] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  

  // States for editing a pet
  const [editingPet, setEditingPet] = useState(null);
  const [updatedPet, setUpdatedPet] = useState({});

  // Fetch all pets from backend
  const fetchPets = async () => {
    try {
      const response = await fetchAllPets();
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

  const sanitizeInput = (input) => {
    return input.trim();
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    const formData = new FormData();
    formData.append("name", newPet.name);
    formData.append("typeId", newPet.typeId);
    formData.append("breed", newPet.breed);
    formData.append("age", newPet.age);
    formData.append("image", newPet.image);
  
    try {
      setIsLoading(true); // Optional: Show loading state
  
      // Use the API call from your services.js file
      const response = await createNewPet(formData);
  
      // Update pet list state
      setPets([...pets, response]);
  
      alert("Pet added successfully!");
      setNewPet({ name: "", typeId: "", breed: "", age: "", image: null }); // Reset form state
    } catch (error) {
      console.error("Error creating pet:", error);
      alert("Failed to create pet.");
    } finally {
      setIsLoading(false); // End loading state
    }
  };
  
  

  // Edit a pet
  const handleEdit = (pet) => {
    try {
      if (!pet || typeof pet !== "object") {
        throw new Error("Invalid pet data");
      }

      const { id = "", name = "", typeId = 1, breed = "", age = 0, image = null } = pet;

      setEditingPet(id);
      setUpdatedPet({ id, name, typeId, breed, age, image:null });
    } catch (error) {
      console.error("Error editing pet:", error);
    }
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
      let response;
      if (editingPet) {
        response = await updatePet(updatedPet.id, formData);  
      } else {
        response = await createNewPet(formData);
      }

      setPets((prevPets) => {
        if (editingPet) {
          return prevPets.map((pets) => 
            pets.id === editingPet ? response : pets);
        } else {
          return [...prevPets, response];
        }
      });

      setEditingPet(null);
      alert("Pet updated successfully");
    } catch (error) {
      console.error("Error updating pet:", error);
      alert("Error updating pet");
    } finally {
      setIsLoading(false);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingPet(null);
  };

  // Delete a pet
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this pet?");
      if (confirmDelete) {
        const response = await deletePet(id);

        if (response.status === 204 || response.status === 200) {
          setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
          alert("Pet deleted successfully");
        } else {
          console.error("Error deleting pet:", response);
          alert("Error deleting pet");
        }
      }
    } catch (error) {
      console.error("Error deleting pet:", error);
      alert("Error deleting pet");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
        <h1>All Pets</h1>

        {/* Add Pet Form */}
        <form onSubmit={handleSubmit} className="create-form">
          <h3>🐾 Add a New Pet</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPet.name}
            onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
            required
          />
          <select
            name="typeId"
            value={newPet.typeId}
            onChange={(e) => setNewPet({ ...newPet, typeId: e.target.value })}
          >
            <option value={1}>Dog</option>
            <option value={2}>Cat</option>
          </select>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={newPet.breed}
            onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newPet.age}
            onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setNewPet({ ...newPet, image: e.target.files[0] })}
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
                        ? `${API_URL.replace("/api/pets", "")}/${pet.path}` // Dynamically resolve base URL
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
