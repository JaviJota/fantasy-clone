import { Slot, Stack, Link } from "expo-router";
import { View, Text, Pressable, StatusBar } from "react-native";
import { Logo } from "../components/Logo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { BellIcon, MenuIcon } from "../components/Icons";
import "../global.css";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#10121e" },
          headerTintColor: "yellow",
          headerLeft: () => <MenuIcon />,
          headerTitle: () => (
            <View className="flex-row">
              <Text className="text-white mr-1 text-base font-bold">
                Mis ligas
              </Text>
              <Text className="text-red-500 text-base font-bold">Fantasy</Text>
            </View>
          ),
          headerRight: () => <BellIcon />,
        }}
      />
    </View>
  );
}
