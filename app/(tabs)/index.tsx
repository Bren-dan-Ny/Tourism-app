import DestinationCard from "@/components/DestinationCard";
import SearchBar from "@/components/SearchBar";
import StatsRow from "@/components/StatsRow";
import { destinations } from "@/data/destinations";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard
            item={item}
            onPress={() => console.log("Destino:", item.name)}
          />
        )}
        ListHeaderComponent={
          <View>
            {/* Header azul */}
            <View style={styles.header}>
              <Text style={styles.greeting}>Hola viajero! 👋</Text>
              <Text style={styles.subtitle}>¿A dónde vamos hoy?</Text>
              <SearchBar />
            </View>

            {/* Stats */}
            <StatsRow />

            {/* Título sección */}
            <Text style={styles.sectionTitle}>✨ Destacados</Text>
          </View>
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 65,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#2563EB",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 20,
  },
  subtitle: {
    color: "#fff",
    opacity: 0.8,
    marginTop: 4,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  list: {},
});
