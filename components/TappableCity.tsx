import React from "react";
import { Text, Image, Box, HStack, VStack, Divider } from "@/components";

import { City } from "@/types";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface TappableCityProps {
  item: City;
  cityID: string;
}

const TappableCity: React.FC<TappableCityProps> = ({ item, cityID }) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/city/${cityID}`)}>
      <HStack space="xl">
        <Image source={{ uri: item.image }} size="sm" borderRadius={4} />
        <VStack space="xs">
          <Text>{item.name}</Text>
          <Text>{item.selfLocation}</Text>
          <HStack space="md">
            <Text size="xs">Here: {item.here}</Text>
            <Divider orientation="vertical" />
            <Text size="xs">Going: {item.going}</Text>
            <Divider orientation="vertical" />
            <Text size="xs">Based: {item.based}</Text>
          </HStack>
        </VStack>
      </HStack>
      <Divider />
    </TouchableOpacity>
  );
};

export default TappableCity;
