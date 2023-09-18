import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DoctorListScreen from './screens/DoctorListScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import MyProfileScreen from './screens/MyProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNav = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'DoctorList') {
              iconName = 'stethoscope';
            } else if (route.name === 'Appointment') {
              iconName = 'calendar';
            } else if (route.name === 'MyProfile') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1E3A8A',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="DoctorList" component={DoctorListScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Appointment" component={AppointmentScreen} options={{ headerShown: false }} />
        <Tab.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>

      {/* Floating message icon */}
      <TouchableOpacity
        style={styles.floatingMessageButton}
        onPress={() => {
          // Handle the click action, e.g., navigate to a message screen
          navigation.navigate('MessageScreen'); // Replace with your navigation logic
        }}
      >
        {/* Change the icon to "comment" */}
        <Icon name="comment" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingMessageButton: {
    marginBottom: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1E3A8A',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Add shadow (Android)
  },
});

export default BottomNav;
