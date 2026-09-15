import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

import StudentsListScreen from "@/app/tabs/StudentsListScreen";

export default function FinanceiroScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Financeiro</ThemedText>
      <ThemedText>
        Controle seu dinheiro de forma simples e organizada. Acompanhe suas
        receitas, despesas e mantenha suas finanças em dia.
      </ThemedText>
      <StudentsListScreen />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
