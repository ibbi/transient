import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import tw from "twrnc";

const TappableCity = ({ item, onSelect }) => (
  <TouchableOpacity
    style={tw`flex flex-row items-center justify-between border-b border-gray-300`}
    onPress={() => onSelect(item)}
  >
    <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
    <View style={tw`flex flex-col`}>
      <Text>{item.name}</Text>
      <Text>{item.selfLocation}</Text>
      <View style={tw`flex flex-row`}>
        <Text>Here: {item.here}</Text>
        <Text>Going: {item.going}</Text>
        <Text>Based: {item.based}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default TappableCity;
