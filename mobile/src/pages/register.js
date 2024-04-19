import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AuthContext from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { registerUser } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      await registerUser(full_name, email, username, password, password2); 
    } catch (error) {
        console.log('registration error', error, error.errorMessage);
      setErrorMessage('Registration failed - Server Error'); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={full_name}
        onChangeText={setFull_name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <View style={styles.row}>
          <Text style={styles.forgot}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
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
  error: {
      color: 'red',
      marginTop: 10,
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

export default RegisterScreen;
