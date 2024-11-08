import React, {createContext, useContext, useState, useEffect} from "react";
import { fetchProfileData, } from "../services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // const 

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        const data ={
            userId: userId,
            token: token
        }

        fetchProfileData(data);
    }, []);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        
        if(userId && token) {
            setIsLoggedIn(true);
        }else {
            setIsLoggedIn(false);
        }
    });
}