import axiosInstance from "../config/axiosConfig";
import {
  API_LOGIN,
  API_SIGNUP,
  API_POST_FORGOT_PASSWORD,
  API_PUT_RESET_PASSWORD,
  API_PROFILE_DATA,
  API_GET_ADOPTION_REQUESTS,
  API_CREATE_ADOPTION_REQUEST,
  API_GET_ALL_PETS
} from "../config/endpoints.service";

// Define types for response data
interface User {
  id: string;
  token: string;
}

interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
}

interface RegisterResponse {
  data: {
    token: string;
    user: User;
  };
}

interface ForgotPasswordResponse {
  status: number;
}

interface ResetPasswordData {
  email: string;
  password: string;
}

interface ProfileData {
  name: string;
  email: string;
  // Add more fields as needed
}

interface AdoptionRequest {
  id: string;
  userId: string;
  petId: string;
  status: string;
  // Add more fields as needed
}

interface AdoptionRequestResponse {
  data: AdoptionRequest[];
}

const login = async (data: { email: string; password: string }): Promise<LoginResponse> => {
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
      throw new Error(error.response.data.message[0].msg || "Incorrect email or password");
    } else {
      throw new Error("Network error");
    }
  }
};

const register = async (data: { email: string; password: string; name: string }): Promise<RegisterResponse> => {
  try {
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
};

const postForgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
  const data = { email: email };
  try {
    const res = await axiosInstance.post(API_POST_FORGOT_PASSWORD, data);
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

const putResetPassword = async ({ email, password }: ResetPasswordData) => {
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
const fetchProfileData = async (data: { userId: string }): Promise<ProfileData> => {
  try {
    const res = await axiosInstance.post(API_PROFILE_DATA, data);
    return res.data;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error;
  }
};

// PUT profile data
const putProfileData = async (data: ProfileData): Promise<any> => {
  try {
    const response = await axiosInstance.put(API_PROFILE_DATA, data);
    return response;
  } catch (error) {
    console.error("Error sending profile data:", error);
    throw error;
  }
};

// Get user adoption request
const fetchAdoptionRequest = async (filters: Record<string, string> = {}): Promise<AdoptionRequestResponse> => {
  try {
    const response = await axiosInstance.get(API_GET_ADOPTION_REQUESTS, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching adoption requests:", error);
    throw error;
  }
};

const createAdoptionRequest = async (data: { userId: string; petId: string }): Promise<any> => {
  try {
    const response = await axiosInstance.post(API_CREATE_ADOPTION_REQUEST, data);
    return response.data;
  } catch (error) {
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
  createAdoptionRequest,
};
