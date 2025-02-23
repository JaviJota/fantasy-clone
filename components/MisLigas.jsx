import { View, Pressable, Text } from "react-native";

import { OptionsIcon, TrophyIcon } from "./Icons";

export function MisLigas() {
  return (
    <>
      <View className="flex-row justify-between items-end mt-12 mx-1.5">
        <Text className="text-white/50 text-sm ml-1.5">MIS LIGAS</Text>
        <Pressable className="bg-red-500 items-center px-6 py-2 rounded">
          <Text className="font-bold text-white">Crear Liga</Text>
        </Pressable>
      </View>
      <View className="bg-white rounded p-4 mt-4">
        <View className="flex-row items-center">
          <View className="bg-gray-400/50 rounded-full p-1">
            <TrophyIcon color={"red"} size={20} />
          </View>
          <Text className="font-bold text-xl ml-2">KALERGI 2.0</Text>
          <View className="flex-row ml-4">
            <Text className="text-black/30 text-sm mr-0.5">Uber</Text>
            <Text className="text-black/30 font-bold text-sm">Eats</Text>
          </View>
          <View className="ml-auto">
            <OptionsIcon size={16} />
          </View>
        </View>
        <View className="flex-row justify-between mt-5 mx-8">
          <View className="flex-row">
            <Text className="font-semibold">5</Text>
            <Text className="text-black/30 ml-1.5">/ 6</Text>
          </View>
          <View className="flex-row items-baseline">
            <Text className="font-semibold">809</Text>
            <Text className="text-black/30 ml-1.5 text-xs">PFSY</Text>
          </View>
          <View className="flex-row items-center">
            <Text>37.981.412</Text>
            <Text className="bg-yellow-500 rounded-full ml-1.5 py-0.5 pl-1 pr-1.5 font-bold">
              €
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
