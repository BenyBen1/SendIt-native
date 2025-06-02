import React from "react";
import AuthNavigator from "./navigation/AuthNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";  // ✅ Correct import
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  console.log("Redux Store State:", store);  // ✅ Debugging: Check if store is defined

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
