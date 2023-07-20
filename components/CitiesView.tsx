import React, { useCallback, useRef, useState, useMemo } from "react";
import { FlatList, View, Text, Image } from "react-native";
import tw from "twrnc";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import TappableCity from "./TappableCity";
import { City } from "../types";

const selfLocationStrings = [
  "You've never been!",
  "Last here Aug 15, '20",
  "Next here Jan 15, '24",
  "You're here!",
];

let cities: City[] = [
  { id: "1", name: "New York" },
  { id: "2", name: "Los Angeles" },
  { id: "3", name: "Chicago" },
  { id: "4", name: "Houston" },
  { id: "5", name: "Phoenix" },
  { id: "6", name: "Philadelphia" },
  { id: "7", name: "San Antonio" },
  { id: "8", name: "San Diego" },
  { id: "9", name: "Dallas" },
  { id: "10", name: "San Jose" },
  { id: "11", name: "Austin" },
  { id: "12", name: "Jacksonville" },
  { id: "13", name: "Fort Worth" },
  // Add more cities as needed
].map((city) => ({
  ...city,
  image: "https://placekitten.com/640/360",
  selfLocation:
    selfLocationStrings[Math.floor(Math.random() * selfLocationStrings.length)],
  here: Math.floor(Math.random() * 20),
  going: Math.floor(Math.random() * 20),
  based: Math.floor(Math.random() * 20),
}));

const CitiesView = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%", "75%"], []);

  const handlePresentModalPress = useCallback((city) => {
    setSelectedCity(city);
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View>
        <Text style={tw`text-2xl font-bold`}>Transient</Text>
        <FlatList
          data={cities}
          renderItem={({ item }) => (
            <TappableCity item={item} onSelect={handlePresentModalPress} />
          )}
          keyExtractor={(item) => item.id}
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
        >
          <View style={tw`flex flex-col items-center justify-center`}>
            {selectedCity && (
              <>
                <Image
                  source={{ uri: selectedCity.image }}
                  style={{ width: 400, height: 300 }}
                />
                <Text>{selectedCity.name}</Text>
                <Text>{selectedCity.selfLocation}</Text>
                <Text>Here: {selectedCity.here}</Text>
                <Text>Going: {selectedCity.going}</Text>
                <Text>Based: {selectedCity.based}</Text>
              </>
            )}
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default CitiesView;
