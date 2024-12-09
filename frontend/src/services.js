// import axiosInstance from "../config/axiosConfig";
// import { 
//   API_LOGIN, 
//   API_SIGNUP 
// } from "../config/endpoints";

// const login = async (data) => {
//   try {
//     const response = await axiosInstance.post(API_LOGIN, data);
//     const token = response.data.token;
//     const userId = response.data.user.id;
//     localStorage.setItem("token", token);
//     localStorage.setItem("userId", userId);
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in: ", error);
//     if (error.response) {
//       throw new Error(
//       error.response.data.message[0].msg || "Incorrrect email or password"
//         );
//     } else {
//       throw new Error("Network error");
//     }
//   }
// }

// const register = async (data) => {
//   try{
//     const response = await axiosInstance.post(API_SIGNUP, data);
//     const token = response.data.token;
//     const userId = response.data.user.id;
//     localStorage.setItem("token", token);
//     localStorage.setItem("userId", userId);
//     return response.data;
//   } catch (error) {
//     console.error("Error signing up: ", error);
//     if (error.response) {
//       throw new Error(error.response.data.message[0].msg);
//     } else {
//       throw new Error("Network error");
//     }
//   }
// }