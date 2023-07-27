import { useState, useEffect } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  Divider,
  Heading,
  Select,
  Text,
  FormControl,
  Button,
} from "@/components";
import { getCityList } from "@/api";

export default function AddNewModal() {
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null); // TODO: type this as a city object
  const [cities, setCities] = useState<any>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const cityList = await getCityList();
      setCities(cityList);
    };
    fetchCities();
  }, []);

  const setDate = (
    // @ts-ignore
    event: DateTimePickerEvent,
    date: Date,
    isEnd?: Boolean
  ) => {
    if (isEnd) {
      setEndDate(date);
    } else {
      setStartDate(date);
    }
  };

  return (
    <>
      <Heading>Add new trip or friend</Heading>
      <Divider />
      <Text>Adding friends coming soon!</Text>
      <Divider />
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Where are you going?</FormControl.Label.Text>
        </FormControl.Label>
        <Select
          // selectedValue={selectedCity}
          onValueChange={(c) => setSelectedCity(c)}
        >
          <Select.Trigger>
            <Select.Input />
          </Select.Trigger>
          <Select.Portal>
            <Select.Backdrop />
            <Select.Content>
              <Select.DragIndicatorWrapper>
                <Select.DragIndicator />
              </Select.DragIndicatorWrapper>
              {cities.map((city: any) => (
                <Select.Item label={city.name} value={city.id} key={city.id} />
              ))}
            </Select.Content>
          </Select.Portal>
        </Select>
        <FormControl.Label.Text>Start date</FormControl.Label.Text>
        <RNDateTimePicker
          value={new Date()}
          onChange={(e, d) => d && setDate(e, d)}
        />
        <FormControl.Label.Text>End date</FormControl.Label.Text>
        <RNDateTimePicker
          value={new Date()}
          onChange={(e, d) => d && setDate(e, d, true)}
        />
        <Button
          onPress={() => {
            console.log("hi");
          }}
        >
          <Text>Add trip</Text>
        </Button>
      </FormControl>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </>
  );
}
