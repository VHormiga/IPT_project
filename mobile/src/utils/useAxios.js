import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const baseURL = "http://192.168.137.27:8000/api/";

const useAxios = () => {
    const { authTokens } = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL,
        headers: {
            Authorization: authTokens ? `Bearer ${authTokens.access}` : null 
        }
    });

    return axiosInstance;
};

export default useAxios;
