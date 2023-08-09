import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  WelcomeScreen: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>; // for useNavigation in RootStackNavigator
