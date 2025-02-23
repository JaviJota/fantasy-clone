import { View, Text, Image } from "react-native";

export function LigasRecomendadas() {
  return (
    <>
      <Text className="text-white/50 text-sm mt-5 ml-1.5">
        LIGAS RECOMENDADAS
      </Text>
      <View className="mt-2">
        <View className="bg-red-500 rounded-t">
          <Text className="text-white font-bold text-base pt-2 pb-1 pl-4">
            RETO FANTASY DAZN
          </Text>
        </View>
        <View className="bg-white pb-4 rounded-b">
          <View className="flex-row justify-between">
            <View className="p-3">
              <View className="flex-row items-center">
                <Image
                  source={{
                    uri: "http://www.lafutbolteca.com/wp-content/uploads/2010/01/Escudo-Real-Madrid-Club-de-F%C3%BAtbol.jpg",
                  }}
                  style={{ width: 30, height: 30 }}
                />
                <Text className="text-black text-xl font-semibold">
                  Real Madrid
                </Text>
              </View>

              <View className="flex-row items-center ml-0.5 mt-1.5">
                <Image
                  source={{
                    uri: "http://www.lafutbolteca.com/wp-content/uploads/2022/08/Escudo-Girona-FC-2022.jpg",
                  }}
                  style={{ width: 25, height: 25 }}
                />
                <Text className="text-black text-xl font-semibold ml-1">
                  Girona FC
                </Text>
              </View>
            </View>
            <View className="p-3 mr-8 mt-1">
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/DAZN_Logo_Master.svg/2048px-DAZN_Logo_Master.svg.png",
                }}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
          <View className="ml-12">
            <Text className="text-black/40 text-base">
              ¡Crea tu XI para el #RealMadridGirona!
            </Text>
            <Text className="font-bold text-base mt-4">
              23 febrero 2025 · 16:15h
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
