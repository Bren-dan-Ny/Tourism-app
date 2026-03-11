import { StyleSheet, Text, View } from "react-native";

type Stat = {
  value: string;
  label: string;
  color: string;
};

const stats: Stat[] = [
  { value: "50+", label: "Destinos", color: "#2563EB" },
  { value: "4.8", label: "Rating", color: "#22C55E" },
  { value: "10K+", label: "Viajeros", color: "#8B5CF6" },
];

export default function StatsRow() {
  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.stat}>
          <Text style={[styles.value, { color: stat.color }]}>
            {stat.value}
          </Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: -25, // ← esto lo jala hacia arriba sobre el header azul
    elevation: 4,
  },
  stat: {
    alignItems: "center",
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    color: "#666",
    fontSize: 13,
    marginTop: 2,
  },
});
