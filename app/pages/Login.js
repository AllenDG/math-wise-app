import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, TextInput, nav } from 'react-native'; 



import Lock from '../../assets/images/login.png'; 
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import Twitter from '../../assets/images/twitter.png';


const Login = ({navigation}) => {

 
  
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
    <View style={styles.container}>
    <View style={styles.headerContainer}>

      <Image source={Lock} style={styles.img} />

    </View>

      <Text style={styles.customText}>Login</Text>
    
  
    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginLeft:10,marginRight:10}}>

    <TextInput placeholder='Enter Email' keyboardType='email-address' style={styles.email}></TextInput>
    </View>

    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginLeft:10,marginRight:10}}>

    <TextInput placeholder='Enter Password' secureTextEntry={true} style={styles.password}></TextInput>

    <TouchableOpacity onPress={() => {}}>
        <Text style={{color:'#001FDB', fontWeight:'700',}}>Forgot?</Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.loginBtn}  onPress={() => {}}>
        <Text style={styles.textBtn}>Login</Text>
    </TouchableOpacity> 

    <Text style={{textAlign:'center', color:'#666', marginBottom:30}}>Or, login with ...</Text>

    <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:30, }}>
    <TouchableOpacity onPress={() => {}} style={{borderColor:'#ddd', borderWidth:2,borderRadius:30,paddingHorizontal:30,paddingVertical:10}} >
    <Image source={Google} style={styles.icons} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {}} style={{borderColor:'#ddd', borderWidth:2,borderRadius:30,paddingHorizontal:30,paddingVertical:10}} >
    <Image source={Facebook} style={styles.icons} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {}} style={{borderColor:'#ddd', borderWidth:2,borderRadius:30,paddingHorizontal:30,paddingVertical:10}} >
    <Image source={Twitter} style={styles.icons} />
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row', justifyContent:'center'}}>
    <Text>New to the app?</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
    <Text style={{color:'#001FDB',fontWeight:'700'}}> Register</Text>
    </TouchableOpacity>
    </View>

    </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal:25,
  },

  img: {
    height: 200,
    width: 200,
    marginBottom: 45,
  },
  customText: {
    fontSize: 28,
    fontWeight: '500',
    color:'#333',
    marginBottom:30,
    
    },
  email: {
    flex:1, 
    paddingVertical:0,
    },
  password: {
    flex:1, 
    paddingVertical:0,
    },
  loginBtn: {
    backgroundColor: '#001FDB',
    padding:20,
    borderRadius:10,
    marginBottom:30,
  },
  textBtn: {
    textAlign:'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff'
  },
  icons: {
    height: 25,
    width: 25,

  }
    });

export default Login;
