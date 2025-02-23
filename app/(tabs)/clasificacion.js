import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Screen } from "../../components/Screen";
import { useState } from "react";
import { ChevronDownIcon, LiveIcon } from "../../components/Icons";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Screen>
      <ScrollView>
        <View className="flex-row justify-between items-end mt-3">
          <View className="relative">
            <Pressable
              onPress={() => setIsOpen(!isOpen)}
              className={` ${isOpen ? "bg-red-500" : "bg-slate-900"} flex-row justify-center items-center w-[130] py-3 rounded`}
            >
              <Text className="font-bold text-white mr-2">Jornada 25</Text>
              <ChevronDownIcon className={` ${isOpen ? "rotate-180" : ""} `} />
            </Pressable>
          </View>
          <View
            className={`bg-white w-[130] rounded-b absolute z-10 justify-center top-10 ${isOpen ? "py-2" : "h-0"}`}
          >
            <Text className="mb-3 text-center">Total</Text>
            <Text className="mb-4 text-center">Jornada 25</Text>
            <Text className="mb-4 text-center">Jornada 24</Text>
            <Text className="mb-4 text-center">Jornada 23</Text>
            <Text className="mb-4 text-center">Jornada 22</Text>
            <Text className="mb-2 text-center">Jornada 21</Text>
          </View>
          <View>
            <Pressable className="bg-red-500 justify-center items-center px-4 py-3 rounded flex-row">
              <LiveIcon key="live-icon" className="-rotate-90" />
              <Text className=" text-white ml-3">EN DIRECTO</Text>
            </Pressable>
          </View>
        </View>
        <View className="bg-slate-900  mt-4 rounded">
          {/* User */}
          <View className="flex-row items-center justify-between px-4 rounded border-b">
            <View className="flex-row items-center py-3">
              <Text className="text-white mr-4">1</Text>
              <View className="mr-3 rounded-full w-16 h-16 bg-gray-400 border border-1.5 border-white relative">
                <View className="rounded-full w-4 h-4 bg-yellow-500 absolute -left-1 top-2"></View>
              </View>
              <View>
                <Text className="text-white font-bold text-xl">Usuario 1</Text>
                <Text className="text-xs text-white/50">740.315.263</Text>
              </View>
            </View>
            <View className="flex-row items-end">
              <Text className="text-white font-bold text-2xl">1217</Text>
              <Text className="text-white/50 text-xs ml-1">PFSY</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between px-4 rounded border-b">
            <View className="flex-row items-center py-3">
              <Text className="text-white mr-4">2</Text>
              <View className="mr-3 rounded-full w-16 h-16 bg-gray-400 border border-1.5 border-white "></View>
              <View>
                <Text className="text-white font-bold text-xl">Usuario 2</Text>
                <Text className="text-xs text-white/50">566.231.432</Text>
              </View>
            </View>
            <View className="flex-row items-end">
              <Text className="text-white font-bold text-2xl">1156</Text>
              <Text className="text-white/50 text-xs ml-1">PFSY</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between px-4 rounded border-b">
            <View className="flex-row items-center py-3">
              <Text className="text-white mr-4">3</Text>
              <View className="mr-3 rounded-full w-16 h-16 bg-gray-400 border border-1.5 border-white "></View>
              <View>
                <Text className="text-white font-bold text-xl">Usuario 3</Text>
                <Text className="text-xs text-white/50">315.263.125</Text>
              </View>
            </View>
            <View className="flex-row items-end">
              <Text className="text-white font-bold text-2xl">987</Text>
              <Text className="text-white/50 text-xs ml-1">PFSY</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between px-4 rounded border-b">
            <View className="flex-row items-center py-3">
              <Text className="text-white mr-4">4</Text>
              <View className="mr-3 rounded-full w-16 h-16 bg-gray-400 border border-1.5 border-white "></View>
              <View>
                <Text className="text-white font-bold text-xl">Usuario 4</Text>
                <Text className="text-xs text-white/50">128.321.667</Text>
              </View>
            </View>
            <View className="flex-row items-end">
              <Text className="text-white font-bold text-2xl">954</Text>
              <Text className="text-white/50 text-xs ml-1">PFSY</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between px-4 rounded border-b">
            <View className="flex-row items-center py-3">
              <Text className="text-white mr-4">5</Text>
              <View className="mr-3 rounded-full w-16 h-16 bg-gray-400 border border-1.5 border-white "></View>
              <View>
                <Text className="text-white font-bold text-xl">Usuario 5</Text>
                <Text className="text-xs text-white/50">443.321.654</Text>
              </View>
            </View>
            <View className="flex-row items-end">
              <Text className="text-white font-bold text-2xl">879</Text>
              <Text className="text-white/50 text-xs ml-1">PFSY</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
