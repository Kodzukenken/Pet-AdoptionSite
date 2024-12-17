<<<<<<< Updated upstream
import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import petsData from "../../data/petsData";

const PetList = () => {
  const [pets, setPets] = useState(petsData);
=======
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
// import petsData from "../../data/petsData";
import "../../styles/adminDashboard.css";
import axios from "axios";

const API_URL = "http://localhost:8080/api/pets"

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
>>>>>>> Stashed changes

  // State for the form input
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
<<<<<<< Updated upstream
  });

=======
    image: "",
  });

  const [editingPet, setEditingPet] = useState(null); // Track pet being edited
  const [updatedPet, setUpdatedPet] = useState({}); // Track changes for update

  //Fetch pets
  const fetchPets = async () => {
    try {
      const response = await axios.get(API_URL);
      setPets(response.data);
      setIsLoading(false);
    } catch (error){
      console.error("Error fetching pets:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

>>>>>>> Stashed changes
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  // Handle adding a new pet
<<<<<<< Updated upstream
  const handleCreate = (e) => {
    e.preventDefault();

    if (newPet.name && newPet.type && newPet.breed && newPet.age) {
      const newPetData = {
        id: pets.length + 1,
        ...newPet,
        age: parseInt(newPet.age, 10), // Ensure age is a number
      };

      setPets([...pets, newPetData]);
      setNewPet({ name: "", type: "", breed: "", age: "" }); // Reset form
    } else {
      alert("Please fill in all fields.");
=======
  
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newPet);
      setPets([...pets, response.data]);
      setNewPet({ name: "", type: "", breed: "", age: "", image: "" });
    } catch (error) {
      console.error("Error adding pet:", error);
>>>>>>> Stashed changes
    }
  };

  // Handle delete
<<<<<<< Updated upstream
  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
=======
  const handleDelete = async (id) => {
    try {
      await axios.delete('${API_URL/${id}');
      setPets(pets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  // Handle update/edit mode
  const handleEdit = (pet) => {
    setEditingPet(pet.id);
    setUpdatedPet({ ...pet });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPet({ ...updatedPet, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('${API_URL}/${editingPet}', updatedPet)
      const updatedPets = pets.map((pet)=> 
      pet.id === editingPet ? response.data : pet
    );
    setPets(updatedPets);
    setEditingPet(null);
    
    }
  };

  const handleCancel = () => {
    setEditingPet(null); // Cancel editing mode
>>>>>>> Stashed changes
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
        <h1>All Pets</h1>

        {/* Create Form */}
<<<<<<< Updated upstream
        <form onSubmit={handleCreate} style={{ marginBottom: "20px" }}>
=======
        <form onSubmit={handleCreate} className="create-form">
>>>>>>> Stashed changes
          <h3 className="form-heading">🐾 Add a New Pet</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPet.name}
            onChange={handleInputChange}
<<<<<<< Updated upstream
            className="small-input"
=======
>>>>>>> Stashed changes
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={newPet.type}
            onChange={handleInputChange}
<<<<<<< Updated upstream
            className="small-input"
=======
>>>>>>> Stashed changes
            required
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={newPet.breed}
            onChange={handleInputChange}
<<<<<<< Updated upstream
            className="small-input"
=======
>>>>>>> Stashed changes
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newPet.age}
            onChange={handleInputChange}
<<<<<<< Updated upstream
            className="small-input age"
            required
          />
          <button type="submit" style={{ height: "35px" }}>Add Pet</button>
        </form>


=======
            required
          />
          <button type="submit">Add Pet</button>
        </form>

>>>>>>> Stashed changes
        {/* Pets Table */}
        <table>
          <thead>
            <tr>
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
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>
<<<<<<< Updated upstream
                  <button>Edit</button>
                  <button onClick={() => handleDelete(pet.id)}>Delete</button>
=======
                  <button className="edit-btn" onClick={() => handleEdit(pet)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(pet.id)}
                  >
                    Delete
                  </button>
>>>>>>> Stashed changes
                </td>
              </tr>
            ))}
          </tbody>
        </table>
<<<<<<< Updated upstream
=======

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
              name="type"
              value={updatedPet.type}
              onChange={handleUpdateChange}
              placeholder="Type"
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default PetList;
