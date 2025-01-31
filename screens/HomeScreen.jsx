import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Image, 
  SafeAreaView,
  Platform,
  StatusBar 
} from "react-native";
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
        <Ionicons name="log-out-outline" size={26} color="#fff" />
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
        <MaterialIcons name="local-shipping" size={26} color="#fff" />
        <Text style={styles.actionText}>Send Package</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("ShippingCalculator")}>
        <MaterialIcons name="attach-money" size={26} color="#fff" />
        <Text style={styles.actionText}>Price Check</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCurrentTracking = () => (
    <View style={styles.trackingCard}>
      <Text style={styles.sectionTitle}>Current Tracking</Text>
      {packages.length > 0 ? (
        packages.map((pkg, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.trackingItem} 
            onPress={() => navigation.navigate("ShipmentDetail", { packageDetails: pkg })}
          >
            <Ionicons name="cube-outline" size={24} color="#FFA500" />
            <Text style={styles.trackingText}>
              {pkg.packageDescription} - {pkg.deliveryOption}
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#FFA500" />
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noTrackingText}>No packages in transit</Text>
      )}
    </View>
  );
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderBalanceCard()}
          {renderTrackingSearch()}
          {renderQuickActions()}
          {renderCurrentTracking()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#002147" },
  container: { flex: 1, padding: 16, backgroundColor: "#002147" },

  /** HEADER **/
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginBottom: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#334466",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logo: { width: 50, height: 50, marginRight: 10 },
  companyName: { fontSize: 22, fontWeight: "bold", color: "#FFA500" },
  logoutButton: { padding: 10 },

  /** BALANCE CARD **/
  balanceCard: { 
    backgroundColor: "#FFA500", 
    padding: 22,  
    borderRadius: 12, 
    marginTop: 20,  /* Increased to push it down */
    marginBottom: 15, 
  },
  balanceText: { color: "#fff", fontSize: 16 },
  amount: { color: "#fff", fontSize: 30, fontWeight: "bold", marginVertical: 8 },
  topUpButton: { backgroundColor: "#fff", padding: 12, borderRadius: 8, alignSelf: "flex-start" },
  topUpText: { color: "#FFA500", fontWeight: "bold", fontSize: 16 },

  /** SEARCH BAR **/
  searchContainer: { 
    flexDirection: "row", 
    backgroundColor: "#334466", 
    borderRadius: 10, 
    padding: 12, 
    alignItems: "center",
    marginBottom: 20
  },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, color: "#fff", fontSize: 16 },
  barcodeIcon: { marginLeft: 10 },

  /** QUICK ACTIONS **/
  quickActions: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 20 
  },
  actionButton: { 
    alignItems: "center", 
    backgroundColor: "#FFA500", 
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,  
    width: "45%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  
  actionText: { color: "#fff", marginTop: 5, fontWeight: "bold", fontSize: 16 },

  /** TRACKING SECTION **/
  trackingCard: { 
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 12, 
    marginTop: 20,
    shadowColor: "#000", 
    shadowOpacity: 0.2, 
    shadowRadius: 5 
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#002147" },
  trackingItem: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  trackingText: { marginLeft: 10, fontSize: 16, color: "#333" },
  noTrackingText: { marginLeft: 10, fontSize: 16, color: 'gray' }
});

export default HomeScreen;
