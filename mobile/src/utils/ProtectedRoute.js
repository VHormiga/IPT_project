import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native'; 

const ProtectedRoute = ({ children }) => {
    const { authTokens } = useContext(AuthContext); 
    const navigation = useNavigation();

    useEffect(() => {
        if (!authTokens) {
            navigation.navigate('Home');
        }
    }, [authTokens, navigation]);

    return authTokens ? children : null;
};

export default ProtectedRoute;
