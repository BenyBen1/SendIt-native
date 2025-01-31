import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const packages = useSelector((state) => state.packages);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/SendIt.png")} style={styles.logo} />
        <Text style={styles.companyName}>SENDIT</Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderBalanceCard = () => (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceText}>Your Balance</Text>
      <Text style={styles.amount}>KES 2,500.00</Text>
      <TouchableOpacity style={styles.topUpButton}>
        <Text style={styles.topUpText}>Top Up</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTrackingSearch = () => (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
      <TextInput
        placeholder="Track your shipment"
        placeholderTextColor="#ccc"
        style={styles.searchInput}
      />
      <Ionicons name="barcode-outline" size={24} color="#fff" style={styles.barcodeIcon} />
    </View>
  );

  const renderQuickActions = () => (
    <View style={styles.quickActions}>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("SendPackage")}>
        <MaterialIcons name="local-shipping" size={24} color="#fff" />
        <Text style={styles.actionText}>Send Package</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("ShippingCalculator")}>
        <MaterialIcons name="attach-money" size={24} color="#fff" />
        <Text style={styles.actionText}>Price Check</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCurrentTracking = () => (
    <View style={styles.trackingCard}>
      <Text style={styles.sectionTitle}>Current Tracking</Text>
      {packages.length > 0 ? (
        packages.map((pkg, index) => (
          <View key={index} style={styles.trackingItem}>
            <Ionicons name="cube-outline" size={24} color="#FFA500" />
            <Text style={styles.trackingText}>
              {pkg.packageDescription} - {pkg.deliveryOption}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noTrackingText}>No packages in transit</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderBalanceCard()}
        {renderTrackingSearch()}
        {renderQuickActions()}
        {renderCurrentTracking()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002147", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logo: { width: 40, height: 40, marginRight: 10 },
  companyName: { fontSize: 20, fontWeight: "bold", color: "#FFA500" },
  logoutButton: { padding: 10 },
  balanceCard: { backgroundColor: "#FFA500", padding: 20, borderRadius: 10, marginBottom: 20 },
  balanceText: { color: "#fff", fontSize: 16 },
  amount: { color: "#fff", fontSize: 28, fontWeight: "bold", marginVertical: 8 },
  topUpButton: { backgroundColor: "#fff", padding: 10, borderRadius: 5, alignSelf: "flex-start" },
  topUpText: { color: "#FFA500", fontWeight: "bold" },
  searchContainer: { flexDirection: "row", backgroundColor: "#334466", borderRadius: 10, padding: 10, alignItems: "center" },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: "#fff" },
  barcodeIcon: { marginLeft: 10 },
  quickActions: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
  actionButton: { alignItems: "center", backgroundColor: "#FFA500", padding: 15, borderRadius: 10, width: "48%" },
  actionText: { color: "#fff", marginTop: 5, fontWeight: "bold" },
  trackingCard: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  trackingItem: { flexDirection: "row", alignItems: "center" },
  trackingText: { marginLeft: 10, fontSize: 16 },
  noTrackingText: { marginLeft: 10, fontSize: 16, color: 'gray'}                                        

});

export default HomeScreen;