import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShipmentDetailScreen = ({ route, navigation }) => {
  const { packageDetails } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shipment Details</Text>
      </View>

      {/* Shipment Details */}
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Package Description:</Text>
          <Text style={styles.value}>{packageDetails.packageDescription}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Sender:</Text>
          <Text style={styles.value}>{packageDetails.senderName} ({packageDetails.senderContact})</Text>
          <Text style={styles.value}>{packageDetails.senderAddress}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Receiver:</Text>
          <Text style={styles.value}>{packageDetails.receiverName} ({packageDetails.receiverContact})</Text>
          <Text style={styles.value}>{packageDetails.receiverAddress}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Delivery Option:</Text>
          <Text style={styles.value}>{packageDetails.deliveryOption}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Package Weight:</Text>
          <Text style={styles.value}>{packageDetails.packageWeight} kg</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Payment Method:</Text>
          <Text style={styles.value}>{packageDetails.paymentMethod}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Special Instructions:</Text>
          <Text style={styles.value}>{packageDetails.specialInstructions || "None"}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002147" },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: "#334466",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backButton: { padding: 10 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#FFA500", marginLeft: 10 },

  detailsContainer: { padding: 20 },
  detailBox: { backgroundColor: "#FFF", padding: 15, borderRadius: 10, marginBottom: 10 },
  label: { fontSize: 16, fontWeight: "bold", color: "#002147" },
  value: { fontSize: 16, color: "#333", marginTop: 5 }
});

export default ShipmentDetailScreen;
