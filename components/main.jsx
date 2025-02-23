import { View, ScrollView, Text, Image, Pressable } from "react-native";

import { Screen } from "./Screen";
import { LigasRecomendadas } from "./LigasRecomendadas";
import { MisLigas } from "./MisLigas";
import { Partidos } from "./Partidos";
import { Noticias } from "./Noticias";

export function Main() {
  return (
    <Screen>
      <ScrollView>
        <View>
          <LigasRecomendadas />
        </View>
        <View>
          <MisLigas />
        </View>
        <View>
          <Partidos />
        </View>
        <View>
          <Noticias />
        </View>
      </ScrollView>
    </Screen>
  );
}
