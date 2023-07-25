import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Divider, Heading, Text, VStack } from "@/components";

export default function AddNewModal() {
  return (
    <VStack space="xl">
      <Heading>Add new trip or friend</Heading>
      <Divider />
      <Text>Coming soon!</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </VStack>
  );
}
