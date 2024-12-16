import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import petsData from "../../data/petsData";

const PetList = () => {
  const [pets, setPets] = useState(petsData);

  // State for the form input
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  // Handle adding a new pet
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
    }
  };

  // Handle delete
  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
        <h1>All Pets</h1>

        {/* Create Form */}
        <form onSubmit={handleCreate} style={{ marginBottom: "20px" }}>
          <h3 className="form-heading">🐾 Add a New Pet</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPet.name}
            onChange={handleInputChange}
            className="small-input"
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={newPet.type}
            onChange={handleInputChange}
            className="small-input"
            required
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={newPet.breed}
            onChange={handleInputChange}
            className="small-input"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newPet.age}
            onChange={handleInputChange}
            className="small-input age"
            required
          />
          <button type="submit" style={{ height: "35px" }}>Add Pet</button>
        </form>


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
                  <button>Edit</button>
                  <button onClick={() => handleDelete(pet.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PetList;
