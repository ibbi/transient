import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "@/app/context/auth-supabase";
import { Stack, useRouter, Link } from "expo-router";
import { useRef } from "react";
import {
  FormControl,
  Input,
  Button,
  Box,
  VStack,
  Heading,
  Text,
} from "@/components";

export default function SignIn() {
  const { signIn } = useAuth();
  const router = useRouter();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "sign up", headerShown: false }} />
      <Box p="$8">
        <FormControl size="md">
          <VStack space="3xl">
            <Heading size="2xl">Sign In</Heading>
            <VStack>
              <FormControl.Label mb="$1">
                <FormControl.Label.Text>Email</FormControl.Label.Text>
              </FormControl.Label>
              <Input>
                <Input.Input
                  type="text"
                  defaultValue=""
                  placeholder="email"
                  autoCapitalize="none"
                  onChangeText={(text) => {
                    emailRef.current = text;
                  }}
                />
              </Input>
            </VStack>
            <VStack>
              <FormControl.Label mb="$1">
                <FormControl.Label.Text>Password</FormControl.Label.Text>
              </FormControl.Label>
              <Input>
                <Input.Input
                  type="password"
                  defaultValue=""
                  placeholder="password"
                  autoCapitalize="none"
                  onChangeText={(text) => {
                    passwordRef.current = text;
                  }}
                />
              </Input>
              <FormControl.Helper>
                <FormControl.Helper.Text>
                  Must be at least 6 characters.
                </FormControl.Helper.Text>
              </FormControl.Helper>
            </VStack>
            <Button
              onPress={async () => {
                const { data, error } = await signIn(
                  emailRef.current,
                  passwordRef.current
                );
                if (data) {
                  router.replace("/");
                } else {
                  console.log(error);
                  // Alert.alert("Login Error", resp.error?.message);
                }
              }}
            >
              <Button.Text fontSize="$sm" fontWeight="$medium">
                Sign in
              </Button.Text>
            </Button>
            <Link href="/sign-up">
              <Text>Click here to sign up</Text>
            </Link>
          </VStack>
        </FormControl>
      </Box>
    </SafeAreaView>
  );
}
