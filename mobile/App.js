import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/context/AuthContext';

// Import your components
import Home from './src/pages/home';
import Dashboard from './src/pages/dashboard';
import LoginScreen from './src/pages/login';
import RegisterScreen from './src/pages/register';
import ProtectedRoute from './src/utils/ProtectedRoute';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{ headerShown: false }} 
            />
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
            />
          <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
            options={{ headerShown: false }} 
            />
          <Stack.Screen 
            options={{ headerShown: false }} 
            name="Dashboard" > 
              {() => (
                  <ProtectedRoute>
                      <Dashboard /> 
                  </ProtectedRoute>
              )}
          </Stack.Screen>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
