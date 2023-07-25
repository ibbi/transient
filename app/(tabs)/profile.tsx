import { ScrollView } from "react-native";
import { useAuth } from "@/app/context/auth-supabase";
import { Box, Button, Heading, Text, VStack } from "@/components";

export default function Profile() {
  const { signOut, user } = useAuth();
  return (
    <ScrollView>
      <Box p={"$8"}>
        <VStack space="xl">
          <Heading>User Information</Heading>
          <Text>{JSON.stringify(user, null, 2)}</Text>
          <Button action="negative" onPress={() => signOut()}>
            <Button.Text>Sign Out</Button.Text>
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
