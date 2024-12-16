import axios from "axios";
import axiosInstance from "../config/axiosConfig";
import {
  API_LOGIN,
  API_SIGNUP,
  API_POST_FORGOT_PASSWORD,
  API_PUT_RESET_PASSWORD,
  API_PROFILE_DATA,
  API_GET_ADOPTION_REQUESTS,
  API_CREATE_ADOPTION_REQUEST,
  API_GET_ALL_PETS,

} from "../src/config/endpoints";

const login = async (data) => {
  try {
    const response = await axiosInstance.post(API_LOGIN, data);
    const token = response.data.token;
    const userId = response.data.user.id;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    return response.data;
  } catch (error) {
    console.error("Error logging in: ", error);
    if (error.response) {
      throw new Error(
      error.response.data.message[0].msg || "Incorrrect email or password"
        );
    } else {
      throw new Error("Network error");
    }
  }
};

const register = async (data) => {
  try{
    const response = await axiosInstance.post(API_SIGNUP, data);
    const token = response.data.token;
    const userId = response.data.user.id;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    return response.data;
  } catch (error) {
    console.error("Error signing up: ", error);
    if (error.response) {
      throw new Error(error.response.data.message[0].msg);
    } else {
      throw new Error("Network error");
    }
  }
}

const postForgotPassword = async (email) => {
  const data = { email: email };

  try {
    const res = await axiosInstance.post(API_POST_FORGOT_PASSWORD, data);

    // check email
    if (res.status === 200) {
      return res; 
    } else {
      throw new Error("Email not registered");
    }
  } catch (error) {
    console.error("Error in forgot password: ", error);
    throw error || "An error occurred while verifying the email.";
  }
};


// no need send email
const putResetPassword = async ({ email, password }) => {
  const data = { email, password };
  try {
    const res = await axiosInstance.put(API_PUT_RESET_PASSWORD, data);
    return res;
  } catch (error) {
    console.error("Error resetting password: ", error);
    throw error;
  }
};

// GET Profile data
const fetchProfileData = async (data) => {
  try{
    const res = await axiosInstance.post(API_PROFILE_DATA, data);
    return res.data;
  } catch (error){
    console.error("Error fetching profile data:", error);
    throw error;
  }
};

// PUT profile data
const putProfileData = async (data) => {
  try{
    const response = await axiosInstance.put(API_PORFILE_DATA, data);
    return response;
  }catch (error){
    console.error("Error sending profile data:", error);
    throw error;
  }
};

// get user adoption request
const fetchAdoptionRequest = async (filters = {}) => {
  try{
    const response = await axiosInstance.get(API_GET_ADOPTION_REQUESTS, {
      params: filters,
    });
    return response.data;
  } catch (error){
    console.error("Error fetching adoption requests:", error);
    throw error;
  }
};


const createAdoptionRequest = async (data) => {
  try{
    const response = await axiosInstance.post(API_CREATE_ADOPTION_REQUEST, data);
    return response.data;
  } catch (error){
    console.error("Error creating adoption request:", error);
    throw error;
  }
};


export {
  login,
  register,
  fetchProfileData,
  putProfileData,
  postForgotPassword,
  putResetPassword,
  fetchAdoptionRequest,

}
