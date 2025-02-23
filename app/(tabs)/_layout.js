import { Tabs } from "expo-router";
import { View } from "react-native";

import {
  TrophyIcon,
  ChartIcon,
  SoccerFieldIcon,
  MarketIcon,
  ActivityIcon,
} from "../../components/Icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          border: "black",
        },
        tabBarActiveTintColor: "#e55050",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Mis ligas",
          tabBarIcon: ({ color }) => <TrophyIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="clasificacion"
        options={{
          title: "Clasificación",
          tabBarIcon: ({ color }) => <ChartIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Equipo",
          tabBarIcon: ({ color }) => <SoccerFieldIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: "Mercado",
          tabBarIcon: ({ color }) => <MarketIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Actividad",
          tabBarIcon: ({ color }) => <ActivityIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
