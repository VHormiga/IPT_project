import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const AuthContext = createContext();


export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null);
    const [loading, setLoading] = useState(true); 

    const navigation = useNavigation();

    const loginUser = async (email, password) => {
        const url = "http://192.168.137.27:8000/api/token/"; 
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        if (response.ok) {
            const data = await response.json();
            await AsyncStorage.setItem("authTokens", JSON.stringify(data)); 
            setAuthTokens(data);
            Alert.alert('Logged in');
            navigation.navigate('Dashboard');
        } else {
            throw new Error("Login Failed");
        }
    };

    const registerUser = async (full_name, email, username, password, password2) => {
        const url = "http://192.168.137.27:8000/api/register/";
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({full_name, email, username, password, password2})
        });

        if (response.ok) {
            Alert.alert('Registered')
            navigation.navigate('LoginScreen');
        } else {
            throw new Error("Registered"); 
        }
    };

    const logoutUser = async () => {
        await AsyncStorage.removeItem("authTokens");
        setAuthTokens(null);
        Alert.alert('Logged out');
    };

    useEffect(() => {
        const checkTokens = async () => {
            const storedTokens = await AsyncStorage.getItem("authTokens");
            if (storedTokens) {
                setAuthTokens(JSON.parse(storedTokens));
            }
            setLoading(false);
        };

        checkTokens(); 
    }, []); 

    const contextData = {
        authTokens,
        loginUser, registerUser, logoutUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};


