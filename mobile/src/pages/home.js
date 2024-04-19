import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AuthContext from '../context/AuthContext';

const Home = ({ navigation }) => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "40%",
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: "center",
  }
});

export default Home;
