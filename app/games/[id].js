import { Link, Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../../lib/metacritic";
import { Platform } from "../../components/Platform";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: () => (
            <View className="flex-row">
              <Text className="text-red-500 font-bold">Hola</Text>
              <Text className="text-black font-bold">prueba</Text>
            </View>
          ),
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.thumbnail }}
                style={{ width: 214, height: 294 }}
              />
              <Platform platform={gameInfo.platform} auto={true} />
              <Text className="text-white font-bold mb-8 mt-4 text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/90 mb-8 text-lg">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
