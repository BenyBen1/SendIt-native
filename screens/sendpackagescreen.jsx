import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { addPackage } from "../components/packageSlice";
import { useDispatch } from "react-redux";

const SendPackageScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderAddress: "",
    senderContact: "",
    receiverName: "",
    receiverAddress: "",
    receiverContact: "",
    packageDescription: "",
    packageWeight: "",
    specialInstructions: "",
    deliveryOption: "standard",
    pickupDropoff: "pickup",
    paymentMethod: "",
  });

  const dispatch = useDispatch();

  const deliveryOptions = [
    { label: "Standard Delivery", value: "standard" },
    { label: "Express Delivery", value: "express" },
    { label: "Same-day Delivery", value: "same-day" },
  ];

  const pickupDropoffOptions = [
    { label: "Pickup", value: "pickup" },
    { label: "Door Delivery", value: "door" },
  ];

  const paymentMethods = [
    { label: "Cash", value: "cash" },
    { label: "Credit Card", value: "credit-card" },
  ];

  const handleConfirmOrder = () => {
    if (
      formData.senderName &&
      formData.senderAddress &&
      formData.senderContact &&
      formData.receiverName &&
      formData.receiverAddress &&
      formData.receiverContact &&
      formData.packageDescription &&
      formData.packageWeight &&
      formData.paymentMethod
    ) {
      dispatch(addPackage(formData)); // Dispatch package to Redux

      Alert.alert("Order Confirmed", "Your package has been successfully sent!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } else {
      Alert.alert("Error", "Please fill in all required fields.");
    }
  };

  const handleSelectDeliveryOption = (option) => {
    setFormData({ ...formData, deliveryOption: option });
  };

  const handleSelectPickupDropoff = (option) => {
    setFormData({ ...formData, pickupDropoff: option });
  };

  const handleSelectPaymentMethod = (method) => {
    setFormData({ ...formData, paymentMethod: method });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Package</Text>
      </View>

      <FlatList
        data={[{}]}
        keyExtractor={() => "key"}
        renderItem={() => (
          <>
            {/* Sender Details */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Sender Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={formData.senderName}
                onChangeText={(text) => setFormData({ ...formData, senderName: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={formData.senderAddress}
                onChangeText={(text) => setFormData({ ...formData, senderAddress: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={formData.senderContact}
                onChangeText={(text) => setFormData({ ...formData, senderContact: text })}
                keyboardType="phone-pad"
              />
            </View>

            {/* Receiver Details */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Receiver Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={formData.receiverName}
                onChangeText={(text) => setFormData({ ...formData, receiverName: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={formData.receiverAddress}
                onChangeText={(text) => setFormData({ ...formData, receiverAddress: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={formData.receiverContact}
                onChangeText={(text) => setFormData({ ...formData, receiverContact: text })}
                keyboardType="phone-pad"
              />
            </View>

            {/* Package Details */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Package Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Description"
                value={formData.packageDescription}
                onChangeText={(text) => setFormData({ ...formData, packageDescription: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                value={formData.packageWeight}
                onChangeText={(text) => setFormData({ ...formData, packageWeight: text })}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Special Instructions (Optional)"
                value={formData.specialInstructions}
                onChangeText={(text) => setFormData({ ...formData, specialInstructions: text })}
              />
            </View>

            {/* Delivery Option */}
            <View style={styles.card}>
              <Text style={styles.label}>Delivery Option</Text>
              <FlatList
                data={deliveryOptions}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.optionButton,
                      formData.deliveryOption === item.value && styles.selectedOption,
                    ]}
                    onPress={() => handleSelectDeliveryOption(item.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        formData.deliveryOption === item.value && styles.selectedOptionText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            {/* Pickup/Dropoff Option */}
            <View style={styles.card}>
              <Text style={styles.label}>Pickup/Dropoff Option</Text>
              <FlatList
                data={pickupDropoffOptions}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.optionButton,
                      formData.pickupDropoff === item.value && styles.selectedOption,
                    ]}
                    onPress={() => handleSelectPickupDropoff(item.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        formData.pickupDropoff === item.value && styles.selectedOptionText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            {/* Payment Method */}
            <View style={styles.card}>
              <Text style={styles.label}>Payment Method</Text>
              <FlatList
                data={paymentMethods}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.optionButton,
                      formData.paymentMethod === item.value && styles.selectedOption,
                    ]}
                    onPress={() => handleSelectPaymentMethod(item.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        formData.paymentMethod === item.value && styles.selectedOptionText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
              <Text style={styles.confirmButtonText}>Confirm Order</Text>
            </TouchableOpacity>
          </>
        )}
      />
    </KeyboardAvoidingView>
  );
};

// Updated Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 20,
  },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "white" },
  card: { backgroundColor: "white", padding: 15, borderRadius: 10, elevation: 3, marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 12, borderRadius: 8, fontSize: 16, borderWidth: 1, borderColor: "#ccc", marginBottom: 12 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  optionButton: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedOption: {
    backgroundColor: "#FFA500",
  },
  optionText: { fontSize: 16 },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  confirmButton: { backgroundColor: "#FFA500", padding: 15, borderRadius: 10, alignItems: "center" },
  confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "white" },
});

export default SendPackageScreen;
