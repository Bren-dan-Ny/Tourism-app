import { IconSymbol } from "@/components/ui/icon-symbol";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <IconSymbol name="magnifyingglass" size={30} color="#999" />
        <TextInput
          placeholder="Buscar destinos..."
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 30,
    marginBottom: -25,
  },
  inputWrapper: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});
