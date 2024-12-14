import React, {useState, useEffect} from 'react';
import {
    login,
    register,
    postForgotPassword,
    putResetPassword,
} from "../services";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/user-context";
import { HOME, USERDASH } from '../constants/routes';
import Swal from "sweetalert2";

export default function Landing(){
  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmPassIsValid, setConfirmPassIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

// Page Mode
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [newPasswordMode, setNewPasswordMode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // validate email & pass
    if(){

    }
  }, [email, password]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    return passwordIsValid && password === confirmPass;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if(validateEmail(email.trim())){
      try{
        setIsLoading(true);
        const response = await login({ email, password});
        loginUser(response.user);
        navigate(HOME);
        setIsLoading(false);
      } catch (error){
        setIsLoading(false);
        setErrorMessage(error.message);
      }
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if(validatePassword()){
      try{
        setIsLoading(true);
        const response = await postVerifyEmail({ email, password});
        if(response.status === 201){
          Swal.fire({
            title: "Email Verified!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          setErrorMessage("");
        }
        setIsLoading(false);
      } catch (error){
        setErrorMessage(error.response.data.message[0].msg);
        setIsLoading(false);
      }
    } else {
      setValidationMessage("Passwords do not match");
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try{
      setIsLoading(true);
      const response = await register(data);
      if(response.status === 440){
        setErrorMessage("Session Expired, please try again!");
      }
      loginUser();
      navigate(USERDASH);
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if(validateEmail(email.trim())) {
      try{
        setIsLoading(true);
        // const response = await postForgotPassword(email);
        // if(response.status === 201){
        //   Swal.fire({
        //     title: "Success!",
        //     text: "P"
        //   })
        // }
      } catch (error){
        setErrorMessage("");
        setIsLoading(false);
      }
    }
  }

  const scrollToFormContainer = () => {
    const formContainer = document.getElementById("form-container");

    if(formContainer){
      formContainer.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      
    </div>
  );
}