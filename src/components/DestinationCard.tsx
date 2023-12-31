import { Image, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../navigation/types";

const DestinationCard = ({ item }: any) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DestinationScreen", { ...item })}
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
    >
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
        className="absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        className="absolute top-1 right-3 rounded-full p-3"
      >
        <Entypo
          name="heart"
          size={wp(6)}
          color={isFavorite ? "red" : "white"}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: wp(4) }} className="text-white font-semibold">
        {item.title}
      </Text>
      <Text style={{ fontSize: wp(2.2) }} className="text-white">
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
export default DestinationCard;
