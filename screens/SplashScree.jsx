import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Register"); // Navigate to login screen after delay
    }, 40000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={("../assets/SendIt.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to Sendit</Text>
      <Text style={styles.description}>Fast and Reliable Courier Services</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002D62",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff7300",
  },
  description: {
    fontSize: 16,
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ff7300",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SplashScreen;
