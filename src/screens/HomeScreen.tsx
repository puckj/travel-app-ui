import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destinations from "../components/Destinations";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="space-y-6 mt-3"
      >
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="mx-5 mb-4">
          <View className="bg-neutral-100 items-center flex-row rounded-full p-4 space-x-2 pl-6">
            <Entypo name="magnifying-glass" size={24} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>
        {/* Categories */}
        <View className="mb-4">
          <Categories />
        </View>

        {/* Sort Categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* Destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
