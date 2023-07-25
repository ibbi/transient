import { Box, Text } from "@/components";
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <Box p="$8">
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>This screen doesn't exist.</Text>

      <Link href="/" style={styles.link}>
        <Text>Go to home screen!</Text>
      </Link>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
