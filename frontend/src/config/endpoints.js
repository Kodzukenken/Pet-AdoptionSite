export const API_URL = "http://localhost:8080/api";

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

//Shelter
const GET_ALL_SHELTERS = "/shelters";

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
const API_PUT_FORGOT_PASSWORD = `${API_URL}${PUT_RESET_PASSWORD}`;

const API_GET_ADOPTION_REQUESTS = `${API_URL}${GET_ADOPTREQ}`;
const API_POST_NEW_ADOPTION_REQUESTS = `${API_URL}${POST_NEW_ADOPTREQ}`
const API_GET_ALL_CATEGORIES = `${API_URL}${GET_ALL_CATEGORIES}`;
const API_GET_ALL_PETS = `${API_URL}${GET_ALL_PETS}`;
const API_GET_ALL_SHELTERS = `${API_URL}${GET_ALL_SHELTERS}`;

const PETS_API = `${API_URL}/pets`;
const CATEG_API = `${API_URL}/categories`;
const SHELTER_API = `${API_URL}/shelters`;
const ADOPTER_API = `${API_URL}/adopters`;
const ADOPTREQ_API = `${API_URL}/adoption-requests`;


// ONLY FOR ADMIN ----------------------------------------------
// adoption request
const GET_ALL_ADOPTREQ = "/adoption-requests/";

//Adopter
const GET_ALL_ADOPTERS = "/adopters";

//Pets
const POST_NEW_PET = "/pets";

//Shelter
const POST_NEW_SHELTER = "/shelters";


export {
  API_URL,
  API_SIGNUP,
  API_LOGIN,
  API_LOGOUT,
  API_PROFILE_DATA,
  API_POST_FORGOT_PASSWORD,
  API_PUT_FORGOT_PASSWORD,
  API_GET_ADOPTION_REQUESTS,
  API_POST_NEW_ADOPTION_REQUESTS,
  API_GET_ALL_CATEGORIES,
  API_GET_ALL_PETS,
  API_GET_ALL_SHELTERS,

}