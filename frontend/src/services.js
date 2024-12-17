import axiosInstance from "../src/config/axiosConfig";
import {
  API_SIGNUP,
  API_LOGIN,
  // API_LOGOUT,
  API_PROFILE_DATA,
  API_RESET_FORGOT_PASSWORD,
  API_POST_FORGOT_PASSWORD,
  API_GET_ADOPTION_REQUESTS,
  API_POST_NEW_ADOPTION_REQUESTS,
  API_GET_ALL_CATEGORIES,
  API_GET_ALL_PETS,
  API_POST_NEW_PET,
  API_GET_ALL_ADOPTREQ,
  API_UPDATE_ADOPTREQ,
  API_REMOVE_ADOPTREQ,
  API_GET_ALL_ADOPTERS,
  API_REMOVE_ADOPTER,
  API_UPDATE_PET,
  API_REMOVE_PET,
} from "../src/config/endpoints";

// Helper function for error handling
const handleRequestError = (error, customMessage = "An error occurred") => {
  console.error(customMessage, error);
  if (error.response) {
    throw new Error(error.response.data.message || customMessage);
  } else {
    throw new Error("Network error");
  }
};

// User Authentication
 const login = async (data) => {
  try {
    const response = await axiosInstance.post(API_LOGIN, data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.id);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error logging in");
  }
};

 const register = async (data) => {
  try {
    const response = await axiosInstance.post(API_SIGNUP, data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.id);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error signing up");
  }
};

 const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
};

// Password Management
 const postForgotPassword = async (email) => {
  try {
    const data = { email };
    const response = await axiosInstance.post(API_POST_FORGOT_PASSWORD, data);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error sending forgot password email");
  }
};

 const putResetPassword = async ({ email, password }) => {
  try {
    const data = { email, password };
    const response = await axiosInstance.put(API_RESET_FORGOT_PASSWORD, data);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error resetting password");
  }
};

// Profile Management
 const fetchProfileData = async () => {
  try {
    const response = await axiosInstance.get(API_PROFILE_DATA);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error fetching profile data");
  }
};

//for updating user info
 const putProfileData = async (data) => {
  try {
    const response = await axiosInstance.put(API_PROFILE_DATA, data);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error updating profile data");
  }
};

// Adoption Requests
 const fetchAdoptionRequests = async (filters = {}) => {
  try {
    const response = await axiosInstance.get(API_GET_ADOPTION_REQUESTS, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error fetching adoption requests");
  }
};

const fetchAllAdoptionRequest = async () =>{
  try{
    const response = await axiosInstance.get(API_GET_ALL_ADOPTREQ);
    return response.data;
  } catch (error){
    handleRequestError(error, "Error fetching adoption request");
  }
}

 const createAdoptionRequest = async (data) => {
  try {
    const response = await axiosInstance.post(
      API_POST_NEW_ADOPTION_REQUESTS,
      data
    );
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error creating adoption request");
  }
};

 const updateAdoptionRequest = async (id, data) => {
  try {
    const response = await axiosInstance.put(`${API_UPDATE_ADOPTREQ}/${id}`, data);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error updating adoption request");
  }
};

 const deleteAdoptionRequest = async (id) => {
  try {
    const response = await axiosInstance.delete(`${API_REMOVE_ADOPTREQ}/${id}`);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error deleting adoption request");
  }
};

// Pets Management
 const fetchAllPets = async () => {
  try {
    const response = await axiosInstance.get(API_GET_ALL_PETS);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error fetching pets");
  }
};

const createNewPet = async (data) => {
  try {
    const response = await axiosInstance.post(API_POST_NEW_PET, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


const updatePet = async (id, data) => {
  try {
    const response = await axiosInstance.put(API_UPDATE_PET(id), data);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error updating pet");
  }
};



const deletePet = async (id) => {
  try {
    const response = await axiosInstance.delete(`${API_REMOVE_PET}/${id}`);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error deleting pet");
  }
};


// Categories
 const fetchAllCategories = async () => {
  try {
    const response = await axiosInstance.get(API_GET_ALL_CATEGORIES);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error fetching categories");
  }
};

// Adopters Management
 const fetchAllAdopters = async () => {
  try {
    const response = await axiosInstance.get(API_GET_ALL_ADOPTERS);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error fetching adopters");
  }
};

 const deleteAdopter = async (id) => {
  try {
    const response = await axiosInstance.delete(API_REMOVE_ADOPTER, id);
    return response.data;
  } catch (error) {
    handleRequestError(error, "Error deleting adopter");
  }
};


export {
  login,
  register,
  fetchProfileData,
  putProfileData,
  postForgotPassword,
  putResetPassword,
  fetchAdoptionRequests,
  fetchAllAdoptionRequest,
  createAdoptionRequest,
  deleteAdoptionRequest,
  updateAdoptionRequest,
  fetchAllPets,
  createNewPet,
  updatePet,
  deletePet,
  fetchAllCategories,
  fetchAllAdopters,
  deleteAdopter
};