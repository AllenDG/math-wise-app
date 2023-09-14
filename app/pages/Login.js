import React from 'react';
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'; 
import Lock from '../../assets/images/login.png'; 

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={Lock} style={styles.img} />
      <Text style={{ fontSize:28, fontWeight:'300'}}>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
});

export default Login;
