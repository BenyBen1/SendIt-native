import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const API_URL = "http://192.168.0.175:5000"; // Update this to your backend's IP

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        navigation.replace("Login");
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" onChangeText={setEmail} value={email} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" onChangeText={setPassword} value={password} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002147", alignItems: "center", justifyContent: "center", padding: 20 },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFA500", marginBottom: 20 },
  input: { width: "100%", backgroundColor: "#1A3D7A", color: "#fff", padding: 15, borderRadius: 10, marginVertical: 10 },
  button: { width: "100%", backgroundColor: "#FFA500", padding: 15, borderRadius: 10, alignItems: "center", marginVertical: 10 },
  buttonText: { color: "#002147", fontWeight: "bold", fontSize: 18 },
  linkText: { color: "#FFA500", marginTop: 10 },
  error: { color: "red", marginBottom: 10 },
});
