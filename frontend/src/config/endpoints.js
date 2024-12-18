export const API_URL = "http://localhost:8081/api";

//TODO: add URL & check api on back

//auth
const SIGNUP = "/auth/signup";
const LOGIN = "/auth/login";
const LOGOUT = "/auth/logout";
const POST_FORGOT_PASSWORD = "/auth/forgot-password";
const PUT_RESET_PASSWORD = "/auth/reset-password";
const PROFILE_DATA = "/profile";

//Categories
const GET_ALL_CATEGORIES = "/categories";

//Pets
const GET_ALL_PETS = "/pets";

//AdopterRequests
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
const API_POST_NEW_ADOPTION_REQUESTS = `${API_URL}${POST_NEW_ADOPTREQ}`
const API_GET_ALL_CATEGORIES = `${API_URL}${GET_ALL_CATEGORIES}`;
const API_GET_ALL_PETS = `${API_URL}${GET_ALL_PETS}`;

// const PETS_API = `${API_URL}/pets`;
// const CATEG_API = `${API_URL}/categories`;
// const ADOPTER_API = `${API_URL}/adopters`;
// const ADOPTREQ_API = `${API_URL}/adoption-requests`;


// ONLY FOR ADMIN ----------------------------------------------
// adoption request
const GET_ALL_ADOPTREQ = "/admin/adoption-requests";
const UPDATE_ADOPTREQ = "/admin/update-adoptreq";
const REMOVE_ADOPTREQ = "/admin/remove-adoptreq";

const API_GET_ALL_ADOPTREQ = `${API_URL}${GET_ALL_ADOPTREQ}`;
const API_UPDATE_ADOPTREQ = `${API_URL}${UPDATE_ADOPTREQ}`;
const API_REMOVE_ADOPTREQ = `${API_URL}${REMOVE_ADOPTREQ}`;

//Adopter
const GET_ALL_ADOPTERS = "/admin/adopters";
const REMOVE_ADOPTER = "/admin/remove-adopter";

const API_GET_ALL_ADOPTERS = `${API_URL}${GET_ALL_ADOPTERS}`;
const API_REMOVE_ADOPTER = `${API_URL}${REMOVE_ADOPTER}`;

//Pets
const POST_NEW_PET = "/admin/pets";
const UPDATE_PET = "/admin/update-pet";
const REMOVE_PET = "/admin/remove-pets";

const API_POST_NEW_PET = `${API_URL}${POST_NEW_PET}`;
const API_UPDATE_PET = `${API_URL}${UPDATE_PET}`;
const API_REMOVE_PET = `${API_URL}${REMOVE_PET}`;

export {
  // API_URL,
  API_SIGNUP,
  API_LOGIN,
  API_LOGOUT,
  API_PROFILE_DATA,
  API_POST_FORGOT_PASSWORD,
  API_RESET_FORGOT_PASSWORD,
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
  API_REMOVE_PET
}
// export const API_LOGIN = "https://jsonplaceholder.typicode.com/posts";
// export const API_SIGNUP = "https://jsonplaceholder.typicode.com/posts";
