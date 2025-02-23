import { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Platform } from "./Platform";
import { Link } from "expo-router";

export function GameCard({ game }) {
  return (
    <Link href={`/games/${game.id}`} asChild>
      <Pressable className="active:opacity-70 border border-black active:border-white/70 mb-5 bg-slate-500/20 p-4 mx-4 rounded-xl">
        <View className="flex-row gap-4" key={game.id}>
          <Image source={{ uri: game.thumbnail }} style={styles.image} />
          <View className="flex-shrink">
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.short_description}>
              {game.short_description}
            </Text>
            <Text style={styles.release}>{game.release_date}</Text>
            <Platform platform={game.platform} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 50,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  short_description: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "medium",
    marginBottom: 10,
  },
  release: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "medium",
    marginBottom: 10,
  },
  platform: {
    color: "#000",
    fontSize: 12,
    fontWeight: "medium",
    backgroundColor: "#d1d1d1",
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
  },
});
