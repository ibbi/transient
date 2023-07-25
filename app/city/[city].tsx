import { useLocalSearchParams, useRouter, Link } from "expo-router";
import { Divider, Heading, Text, VStack, Box, Image } from "@/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native";

export default function City() {
  const router = useRouter();

  //@ts-ignore
  const { city } = useLocalSearchParams();
  const dummyNames = [
    "Gillian",
    "Kathleen",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Emma",
    "Ava",
    "Sophia",
  ];

  return (
    <SafeAreaView>
      <Box p="$8">
        <Heading>{`${city}`}</Heading>
        <Divider />
        <Text>broken links</Text>
        <FlatList
          data={dummyNames}
          renderItem={({ item }) => (
            <Link href={`/${city}/friend/${item}`} asChild>
              <Text>{item}</Text>
            </Link>
          )}
          keyExtractor={(item) => item}
        />
      </Box>
    </SafeAreaView>
  );
}
