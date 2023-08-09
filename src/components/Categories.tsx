import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../themes";
import { categoriesData } from "../constants";

const Categories = () => {
  return (
    <View className="space-y-5">
      <View className="flex-row mx-5 justify-between items-center">
        <Text
          style={{ fontSize: wp(4) }}
          className="font-semibold text-neutral-700"
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2"
            >
              <Image
                source={item.image}
                style={{ width: wp(20), height: wp(19) }}
                className="rounded-3xl"
              />
              <Text
                className="text-neutral-700 font-medium"
                style={{ fontSize: wp(3) }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
