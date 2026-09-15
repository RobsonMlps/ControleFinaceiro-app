import { StyleSheet, Text, View } from "react-native";

export type StudentProps = {
  title: string;
  subtitle: string;
};

export default function Student({ title, subtitle }: StudentProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 10,
  },
});
