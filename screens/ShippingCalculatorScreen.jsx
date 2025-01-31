import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ShippingCalculatorScreen = () => {
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const [cost, setCost] = useState(null);

  const navigation = useNavigation();

  const calculateCost = () => {
    const weightNum = parseFloat(weight);
    const distanceNum = parseFloat(distance);

    if (isNaN(weightNum) || isNaN(distanceNum)) {
      alert("Please enter valid numbers");
      return;
    }

    const basePrice = 50;
    const totalCost = basePrice + weightNum * 10 + distanceNum * 5;
    setCost(totalCost.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shipping Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter distance (km)"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />

      <TouchableOpacity style={styles.button} onPress={calculateCost}>
        <Text style={styles.buttonText}>Calculate Price</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      {cost !== null && <Text style={styles.result}>Total Cost: KES {cost}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002147", alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFA500", marginBottom: 20 },
  input: { width: "100%", backgroundColor: "#1A3D7A", color: "#fff", padding: 15, borderRadius: 10, marginVertical: 10 },
  button: { width: "100%", backgroundColor: "#FFA500", padding: 15, borderRadius: 10, alignItems: "center", marginVertical: 10 },
  buttonText: { color: "#002147", fontWeight: "bold", fontSize: 18 },
  result: { color: "#FFA500", fontSize: 20, fontWeight: "bold", marginTop: 20 },
});

export default ShippingCalculatorScreen;
