import React, {createContext, useContext, useState, useEffect} from "react";
import { fetchProfileData } from "../services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // see users adoptrequest status
    const [adoptionRequest, setAdoptionRequest] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        const data ={
            userId: userId,
            token: token
        }

        fetchData(data);
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

    const fetchData = async (data) => {
        try{
            const response = await fetchProfileData(data);
            setProfileData(response);
        } catch (error) {
            setIsLoggedIn(false);
        } finally{
            setIsLoggedIn(false);
        }
    };

    const removeUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        setProfileData(null);
    };

    const loginUser = (data) => {
        setIsLoggedIn(true);
        setProfileData(data);
    };

    return (
      <UserContext.Provider value={{
        profileData,
        adoptionRequest,
        isLoggedIn,
        loading,
        setLoading,
        setProfileData,
        setAdoptionRequest,
        removeUser,
        loginUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);