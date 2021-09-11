import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
