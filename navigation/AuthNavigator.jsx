import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import AdminScreen from "../screens/AdminScreen";
import ShippingCalculatorScreen from "../screens/ShippingCalculatorScreen";
import SendPackageScreen from "../screens/SendPackageScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="ShippingCalculator" component={ShippingCalculatorScreen} />
        <Stack.Screen name="SendPackage" component={SendPackageScreen} />
      </Stack.Navigator>
  );
};

export default AuthNavigator;
