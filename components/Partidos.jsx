import { Text, View, Image, Pressable } from "react-native";

export function Partidos() {
  return (
    <View className="bg-white rounded mt-10">
      <View className="flex-row justify-center py-4 border-b border-gray-400/50">
        <Text className="font-bold text-xl">Partidos</Text>
        <Text className="font-bold text-xl text-black/50 ml-2">Jornada 25</Text>
      </View>
      <View className="flex-row items-center py-1.5 border-b border-gray-400/50">
        <View className="flex-1 flex-row items-center justify-end gap-2">
          <Text className="font-semibold text-sm">RC Celta</Text>
          <Image
            source={{
              uri: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
            }}
            style={{ width: 25, height: 25 }}
          />
        </View>

        <View className="px-6 py-1 rounded-md">
          <Text className="text-black/50 font-bold text-sm text-center">
            Hoy
          </Text>
          <Text className="font-semibold text-sm text-center">21:00</Text>
        </View>

        <View className="flex-1 flex-row items-center justify-start gap-2">
          <Image
            source={{
              uri: "https://brandlogos.net/wp-content/uploads/2014/11/ca_osasuna-logo_brandlogos.net_sks0n.png",
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text className="font-semibold text-sm">C.A. Osasuna</Text>
        </View>
      </View>

      {/* segundo */}
      <View className="flex-row items-center py-1.5 border-b border-gray-400/50">
        <View className="flex-1 flex-row items-center justify-end gap-2">
          <Text className="font-semibold text-sm">Deportivo Alavés</Text>
          <Image
            source={{
              uri: "https://brandlogos.net/wp-content/uploads/2022/07/deportivo_alaves-logo_brandlogos.net_g9rbn-512x512.png",
            }}
            style={{ width: 25, height: 25 }}
          />
        </View>

        <View className=" px-4 py-1 rounded-md">
          <Text className="text-black/50 font-bold text-sm text-center">
            Mañana
          </Text>
          <Text className="font-semibold text-sm text-center">14:00</Text>
        </View>

        <View className="flex-1 flex-row items-center justify-start gap-2">
          <Image
            source={{
              uri: "https://cdn.freebiesupply.com/logos/thumbs/2x/rcd-espanyol-de-barcelona-logo.png",
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text className="font-semibold text-sm">
            RCD Espanyol de Barcelona
          </Text>
        </View>
      </View>

      {/* tercero */}
      <View className="flex-row items-center py-1.5 border-b border-gray-400/50">
        <View className="flex-1 flex-row items-center justify-end gap-2">
          <Text className="font-semibold text-sm">Rayo Vallecano</Text>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbcjWKwXkwIt8bqRfDYEmrhjwGsoaGi0wlg&s",
            }}
            style={{ width: 25, height: 25 }}
          />
        </View>

        <View className=" px-4 py-1 rounded-md">
          <Text className="text-black/50 font-bold text-sm text-center">
            Mañana
          </Text>
          <Text className="font-semibold text-sm text-center">16:15</Text>
        </View>

        <View className="flex-1 flex-row items-center justify-start gap-2">
          <Image
            source={{
              uri: "https://brandlogos.net/wp-content/uploads/2014/12/villarreal_cf-logo-brandlogos.net_-512x512.png",
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text className="font-semibold text-sm">Villarreal CF</Text>
        </View>
      </View>

      {/* cuarto */}
      <View className="flex-row items-center py-1.5 border-b border-gray-400/50">
        <View className="flex-1 flex-row items-center justify-end gap-2">
          <Text className="font-semibold text-sm">Valencia CF</Text>
          <Image
            source={{
              uri: "https://brandlogos.net/wp-content/uploads/2014/10/valencia-cf-logo-512x512.png",
            }}
            style={{ width: 25, height: 25 }}
          />
        </View>

        <View className=" px-4 py-1 rounded-md">
          <Text className="text-black/50 font-bold text-sm text-center">
            Mañana
          </Text>
          <Text className="font-semibold text-sm text-center">18:30</Text>
        </View>

        <View className="flex-1 flex-row items-center justify-start gap-2">
          <Image
            source={{
              uri: "https://brandlogos.net/wp-content/uploads/2013/01/club-atletico-de-madrid-logo-vector.png",
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text className="font-semibold text-sm">Atlético de Madrid</Text>
        </View>
      </View>
      <View className="flex-row justify-center py-5 border-b border-gray-400/50">
        <Pressable className="bg-red-500 items-center px-6 py-2 rounded">
          <Text className="font-bold text-white">TODOS LOS PARTIDOS</Text>
        </Pressable>
      </View>
    </View>
  );
}
