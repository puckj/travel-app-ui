import { View, Image, TouchableOpacity, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RootStackNavigationProp } from "../navigation/types";
import { theme } from "../themes";

const DestinationScreen = () => {
  const { params: destination } = useRoute<any>();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [isFavorite, setIsFavorite] = useState(false);
  //   console.log(destination);
  return (
    <View className="bg-white flex-1">
      <StatusBar style="light" />

      {/* Destination image */}
      <Image
        source={destination.image}
        style={{ width: wp(100), height: hp(55) }}
      />

      {/* back button */}
      <SafeAreaView className="absolute flex-row justify-between items-center w-full">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          className="p-2 rounded-full ml-4"
        >
          <Entypo name="chevron-left" size={wp(7)} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          className="p-2 rounded-full mr-4"
        >
          <Entypo
            name="heart"
            size={wp(7)}
            color={isFavorite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* title & description & booking button */}
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="bg-white flex flex-1 justify-between px-5 pt-8 -mt-14"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start">
            <Text
              style={{ fontSize: wp(7) }}
              className="font-bold flex-1 text-neutral-700"
            >
              {destination.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text }}
              className="font-semibold"
            >
              $ {destination.price}
            </Text>
          </View>
          <Text
            style={{ fontSize: wp(3.7) }}
            className="text-neutral-700 tracking-wide mb-2"
          >
            {destination.longDescription}
          </Text>
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <AntDesign name="clockcircle" size={wp(6.5)} color="skyblue" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination.duration}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <Entypo name="location-pin" size={wp(7)} color="#f87171" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination.distance}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Distance</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <Ionicons name="sunny" size={wp(7)} color="orange" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination.weather}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: theme.bg(0.8),
            height: wp(15),
            width: wp(50),
          }}
          className="mb-6 mx-auto flex justify-center items-center rounded-full"
        >
          <Text style={{ fontSize: wp(5.5) }} className="text-white font-bold">
            Book now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationScreen;
