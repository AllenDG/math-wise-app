import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function InputField(
  {label,
   icon,
   inputType,
   keyboardType,
   fieldButtonLabel,
   fieldButtonFunction}) {
  return (
    <View>
    <View style={
      {flexDirection:'row', 
      borderBottomColor:'#ccc',
      borderBottomWidth:1, 
      paddingBottom:8, 
      marginBottom:25, 
      marginLeft:10,
      marginRight:10}}>

    <TextInput placeholder='Enter Email' keyboardType='email-address' style={styles.email}></TextInput>
    </View>

    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginLeft:10,marginRight:10}}>

    {inputType == 'password' ?(
      <TextInput 
      placeholder='label' 
      keyboardType={keyboardType}
      secureTextEntry={true} 
      style={styles.password}
      />
    ):(

      <TextInput
        placeholder='label'
        keyboardType={keyboardType}
        style={styles.password}
      />
    )}

    <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color:'#001FDB', fontWeight:'700',}}>{fieldButtonLabel}</Text>
    </TouchableOpacity>
    </View>
    </View>

    
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal:25,
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

