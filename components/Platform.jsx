import { View, Text } from "react-native";

export function Platform({ platform, auto }) {
  return (
    <View
      className={`self-start px-4 py-3 rounded-md
        ${auto && "mx-auto"}
        ${platform === "PC (Windows)" || "Windows" ? "bg-sky-800" : ""}
        ${platform === "Web Browser" ? "bg-stone-700" : ""}
        ${platform === "PC (Windows), Web Browser" ? "bg-pink-500" : ""}
        `}
    >
      <Text
        className={`font-semibold
        ${platform === "PC (Windows)" || "Windows" ? "text-white" : ""}
        ${platform === "Web Browser" ? " text-gray-50" : ""}
        ${platform === "PC (Windows), Web Browser" ? "text-black" : ""}
        `}
      >
        {platform}
      </Text>
    </View>
  );
}
