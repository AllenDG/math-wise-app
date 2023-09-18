import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import Lock from '../../assets/images/login.png';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import Twitter from '../../assets/images/twitter.png';

const Login = ({ navigation }) => {

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Lock} style={styles.img} />
        <Text style={styles.customText}>Login</Text>
      </View>

      <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} placeholderTextColor="#1E3A8A" />
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} placeholderTextColor="#1E3A8A" />

      <TouchableOpacity style={styles.forgotPassword} onPress={() => {}}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('BotNav')}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orTextContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or, login with</Text>
        <View style={styles.orLine} />
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Image source={Google} style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Image source={Facebook} style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Image source={Twitter} style={styles.icons} />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>New to the app? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  img: {
    height: 120,
    width: 120,
    marginBottom: 20,
   
  },
  customText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#1E3A8A',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#1E3A8A',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingVertical: 8,
    color: '#1E3A8A',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    marginBottom: 15,
    color: '#1E3A8A',
    fontWeight: '700',
  },
  loginBtn: {
    backgroundColor: '#1E3A8A',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  loginBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  orTextContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#1E3A8A',
    marginHorizontal: 10,
  },
  orText: {
    color: '#1E3A8A',
    fontWeight: '700',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1E3A8A',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  icons: {
    height: 25,
    width: 25,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#1E3A8A',
    fontWeight: '400',
  },
  signupLink: {
    color: '#1E3A8A',
    fontWeight: '700',
  },
});

export default Login;
