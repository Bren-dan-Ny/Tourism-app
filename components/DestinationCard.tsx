import { Destination } from "@/data/destinations";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  item: Destination;
  onPress: () => void;
};

export default function DestinationCard({ item, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      {/* Imagen del destino */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Precio */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Desde ${item.price}</Text>
      </View>

      {/* Info inferior */}
      <View style={styles.info}>
        <Text style={styles.country}>📍 {item.country}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      {/* Rating y descripción */}
      <View style={styles.footer}>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
          <Text style={styles.link}>Ver más →</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 16,
    overflow: "hidden",
    elevation: 3, // sombra en Android
  },
  image: {
    width: "100%",
    height: 200,
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    fontWeight: "bold",
    fontSize: 13,
  },
  info: {
    position: "absolute",
    bottom: 100,
    left: 12,
  },
  country: {
    color: "#fff",
    fontSize: 13,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  footer: {
    padding: 12,
    gap: 8,
  },
  description: {
    color: "#666",
    fontSize: 13,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rating: {
    fontWeight: "bold",
  },
  reviews: {
    color: "#666",
    fontSize: 13,
  },
  link: {
    marginLeft: "auto",
    color: "#2563EB",
    fontWeight: "bold",
  },
});
