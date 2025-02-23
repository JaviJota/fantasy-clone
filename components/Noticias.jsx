import { View, Text, Image, Pressable } from "react-native";

export function Noticias() {
  return (
    <View className="bg-white rounded mt-10">
      <View className="flex-row justify-center py-4 border-b border-gray-400/50">
        <Text className="font-bold text-xl">Noticias</Text>
        <Text className="font-bold text-xl text-black/50 ml-2">Fantasy</Text>
      </View>

      <View className="flex-row justify-center items-center p-4 border-b border-gray-400/50">
        <View className="ml-4">
          <Image
            source={{
              uri: "https://s3.sportstatics.com/relevo/www/multimedia/202502/19/media/cortadas/1492564384-Rat6IpAmrrWMe98eaveQHQP-1200x648@Relevo.jpg?w=569&h=320",
            }}
            style={{ width: 80, height: 120, borderRadius: 5 }}
          />
        </View>
        <View className="flex-shrink p-4 ml-10">
          <View className="flex-row mb-3">
            <Text className="text-xs text-black/50">23 FEB</Text>
            <Text className="text-xs text-black/50 ml-4">LALIGA FANTASY</Text>
          </View>
          <View>
            <Text className="font-bold leading-8">
              El betis pierde dos piezas clave y tiene a una en el aire en el
              momento de la verdad en...
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-center items-center p-4 border-b border-gray-400/50">
        <View className="ml-4">
          <Image
            source={{
              uri: "https://s1.sportstatics.com/relevo/www/multimedia/202409/17/media/cortadas/raphinha-mallorca-barcelona-afp-RrAJIMcjwbRlO86J8kqTO5O-1200x648@Relevo.jpg?w=569&h=320",
            }}
            style={{ width: 80, height: 120, borderRadius: 5 }}
          />
        </View>
        <View className="flex-shrink py-4 px-5 ml-10">
          <View className="flex-row mb-3">
            <Text className="text-xs text-black/50">23 FEB</Text>
            <Text className="text-xs text-black/50 ml-4">LALIGA FANTASY</Text>
          </View>
          <View>
            <Text className="font-bold leading-8">
              Clasificación general de los puntos Relevo de LaLiga 24-25
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-center py-5 border-b border-gray-400/50">
        <Pressable className="bg-red-500 items-center px-6 py-2 rounded">
          <Text className="font-bold text-white">Ir a noticias</Text>
        </Pressable>
      </View>
    </View>
  );
}
