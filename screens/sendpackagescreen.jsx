import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const SendPackageScreen = () => {
  const [senderName, setSenderName] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverContact, setReceiverContact] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [packageWeight, setPackageWeight] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [pickupDropoff, setPickupDropoff] = useState('pickup');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirmOrder = () => {
    console.log('Confirm Order button clicked');
    if (senderName && senderAddress && senderContact && receiverName && receiverAddress && receiverContact && packageDescription && packageWeight && paymentMethod) {
      Alert.alert('Order Confirmed', 'Your package has been successfully sent!');
    } else {
      Alert.alert('Error', 'Please fill in all required fields.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Send Package</Text>
      
      <Text style={styles.label}>Sender Name</Text>
      <TextInput
        style={styles.input}
        value={senderName}
        onChangeText={setSenderName}
      />

      <Text style={styles.label}>Sender Address</Text>
      <TextInput
        style={styles.input}
        value={senderAddress}
        onChangeText={setSenderAddress}
      />

      <Text style={styles.label}>Sender Contact Number</Text>
      <TextInput
        style={styles.input}
        value={senderContact}
        onChangeText={setSenderContact}
      />

      <Text style={styles.label}>Receiver Name</Text>
      <TextInput
        style={styles.input}
        value={receiverName}
        onChangeText={setReceiverName}
      />

      <Text style={styles.label}>Receiver Address</Text>
      <TextInput
        style={styles.input}
        value={receiverAddress}
        onChangeText={setReceiverAddress}
      />

      <Text style={styles.label}>Receiver Contact Number</Text>
      <TextInput
        style={styles.input}
        value={receiverContact}
        onChangeText={setReceiverContact}
      />

      <Text style={styles.label}>Package Description</Text>
      <TextInput
        style={styles.input}
        value={packageDescription}
        onChangeText={setPackageDescription}
      />

      <Text style={styles.label}>Weight (kg)</Text>
      <TextInput
        style={styles.input}
        value={packageWeight}
        onChangeText={setPackageWeight}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Special Instructions</Text>
      <TextInput
        style={styles.input}
        value={specialInstructions}
        onChangeText={setSpecialInstructions}
      />

      <Text style={styles.label}>Delivery Option</Text>
      <Picker
        selectedValue={deliveryOption}
        onValueChange={setDeliveryOption}
        style={styles.picker}
      >
        <Picker.Item label="Standard Delivery" value="standard" />
        <Picker.Item label="Express Delivery" value="express" />
        <Picker.Item label="Same-day Delivery" value="same-day" />
      </Picker>

      <Text style={styles.label}>Pickup/Drop-off</Text>
      <Picker
        selectedValue={pickupDropoff}
        onValueChange={setPickupDropoff}
        style={styles.picker}
      >
        <Picker.Item label="Schedule a pickup" value="pickup" />
        <Picker.Item label="Drop-off at nearest location" value="dropoff" />
      </Picker>

      <Text style={styles.label}>Payment Method</Text>
      <Picker
        selectedValue={paymentMethod}
        onValueChange={setPaymentMethod}
        style={styles.picker}
      >
        <Picker.Item label="Credit Card" value="credit_card" />
        <Picker.Item label="PayPal" value="paypal" />
        <Picker.Item label="Cash on Delivery" value="cod" />
      </Picker>

      <Button
        title="Confirm Order"
        onPress={handleConfirmOrder}
        color="#007BFF"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  picker: {
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default SendPackageScreen;
