import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const API_URL = "http://192.168.0.175:5000";



  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: user.uid }),
      });
  
      const data = await response.json();
      console.log("Backend response:", data);
  
      if (response.ok) {
        if (data.user.role === "admin") {
          navigation.replace("AdminDashboard");
        } else {
          navigation.replace("Home");
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  
  
  


  return (
    <View style={styles.container}>
      <Image source={require("../assets/SendIt.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to SENDIT</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002147",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFA500",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#1A3D7A",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#002147",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    color: "#FFA500",
    marginTop: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginScreen;
