import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';

const Dashboard = () => {
  const {logoutUser } = useContext(AuthContext);
  const api = useAxios(); 

  const [protectedData, setProtectedData] = useState('');

  const fetchData = async () => {
    try {
      const response = await api.get('/test/'); 
      setProtectedData(response.data.response);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Welcome</Text>

      <Text style={styles.protectedData}>{protectedData}</Text>  

      <TouchableOpacity style={styles.button} onPress={logoutUser}>
        <Text style={styles.buttonText}>Logout</Text>
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
  info: {
    fontSize: 18,
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  detailValue: {
    marginLeft: 10,
  },
  protectedData: {
    marginTop: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default Dashboard;
