import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';

import Lock from '../../assets/images/signup.png';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import Twitter from '../../assets/images/twitter.png';

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image source={Lock} style={styles.img} />
          <Text style={styles.customText}>Register</Text>
        </View>

        <TextInput
          placeholder='Given Name'
          keyboardType='default'
          style={styles.input}
          placeholderTextColor="#1E3A8A"
        />
        <TextInput
          placeholder='Last Name'
          keyboardType='default'
          style={styles.input}
          placeholderTextColor="#1E3A8A"
        />
        <TextInput
          placeholder='Enter Email'
          keyboardType='email-address'
          style={styles.input}
          placeholderTextColor="#1E3A8A"
        />
        <TextInput
          placeholder='Enter Password'
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="#1E3A8A"
        />

        <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
          <Text style={styles.loginBtnText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or, sign up with ...</Text>

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
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signupLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 30,
    height: 220,
    width: 220,
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
  orText: {
    color: '#1E3A8A',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
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
  signupLink: {
    color: '#1E3A8A',
    fontWeight: '700',
  },
});

export default Signup;
