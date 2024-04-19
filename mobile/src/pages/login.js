import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AuthContext from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { loginUser } = useContext(AuthContext); 

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password); 
    } catch (error) {
        console.log(error);
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <View style={styles.row}>
          <Text style={styles.forgot}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    width: '80%', 
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  forgot: {
    marginTop: 10,
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
});

export default LoginScreen;
