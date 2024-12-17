export const API_URL = "http://localhost:8080/api";

// Authentication Endpoints
const SIGNUP = "/auth/signup";
const LOGIN = "/auth/login";
const LOGOUT = "/auth/logout";
const POST_FORGOT_PASSWORD = "/auth/forgot-password";
const PUT_RESET_PASSWORD = "/auth/reset-password";
const PROFILE_DATA = "/profile";

// Categories
const GET_ALL_CATEGORIES = "/categories";

// Pets
const GET_ALL_PETS = "/pets";

// Adoption Requests
const GET_ADOPTREQ = "/adoption-requests/";
const POST_NEW_ADOPTREQ = "/adoption-requests/";

// Concat URLs
const API_SIGNUP = `${API_URL}${SIGNUP}`;
const API_LOGIN = `${API_URL}${LOGIN}`;
const API_LOGOUT = `${API_URL}${LOGOUT}`;
const API_PROFILE_DATA = `${API_URL}${PROFILE_DATA}`;
const API_POST_FORGOT_PASSWORD = `${API_URL}${POST_FORGOT_PASSWORD}`;
const API_RESET_FORGOT_PASSWORD = `${API_URL}${PUT_RESET_PASSWORD}`;

const API_GET_ADOPTION_REQUESTS = `${API_URL}${GET_ADOPTREQ}`;
const API_POST_NEW_ADOPTION_REQUESTS = `${API_URL}${POST_NEW_ADOPTREQ}`;
const API_GET_ALL_CATEGORIES = `${API_URL}${GET_ALL_CATEGORIES}`;
const API_GET_ALL_PETS = `${API_URL}${GET_ALL_PETS}`;

// Pets (Admin Only)
const POST_NEW_PET = "/pets";
const UPDATE_PET = "/update";
const REMOVE_PET = "/remove";

const API_POST_NEW_PET = `${API_URL}${POST_NEW_PET}`;
const API_UPDATE_PET = `${API_URL}${UPDATE_PET}`;
const API_REMOVE_PET = `${API_URL}${REMOVE_PET}`;

// Adoption Request (Admin Only)
const GET_ALL_ADOPTREQ = "/adoption-requests/";
const UPDATE_ADOPTREQ = "/update-adoptreq";
const REMOVE_ADOPTREQ = "/remove-adoptreq";

const API_GET_ALL_ADOPTREQ = `${API_URL}${GET_ALL_ADOPTREQ}`;
const API_UPDATE_ADOPTREQ = `${API_URL}${UPDATE_ADOPTREQ}`;
const API_REMOVE_ADOPTREQ = `${API_URL}${REMOVE_ADOPTREQ}`;

// Adopters (Admin Only)
const GET_ALL_ADOPTERS = "/adopters";
const REMOVE_ADOPTER = "/remove-adopter";

const API_GET_ALL_ADOPTERS = `${API_URL}${GET_ALL_ADOPTERS}`;
const API_REMOVE_ADOPTER = `${API_URL}${REMOVE_ADOPTER}`;

// Final Export
export {
  API_SIGNUP,
  API_LOGIN,
  API_LOGOUT,
  API_PROFILE_DATA,
  API_POST_FORGOT_PASSWORD,
  API_RESET_FORGOT_PASSWORD, // Fixed name here
  API_GET_ADOPTION_REQUESTS,
  API_POST_NEW_ADOPTION_REQUESTS,
  API_GET_ALL_CATEGORIES,
  API_GET_ALL_PETS,
  API_POST_NEW_PET,
  API_UPDATE_PET,
  API_REMOVE_PET,
  API_GET_ALL_ADOPTREQ,
  API_UPDATE_ADOPTREQ,
  API_REMOVE_ADOPTREQ,
  API_GET_ALL_ADOPTERS,
  API_REMOVE_ADOPTER,
};
