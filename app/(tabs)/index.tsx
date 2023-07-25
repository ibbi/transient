import { FlatList } from "react-native";
import { Box, Heading } from "@/components";
import TappableCity from "@/components/TappableCity";

import { City } from "@/types";

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

export default function Cities() {
  return (
    <Box p="$8">
      <Heading>Cities</Heading>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <TappableCity item={item} cityID={item.name} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
