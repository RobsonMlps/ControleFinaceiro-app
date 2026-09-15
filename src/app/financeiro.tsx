import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

import CategoriasListScreen from "./tabs/CategoriaListScreen";
import TransacoesListScreen from "./tabs/TransacoesListScreen";
export default function FinanceiroScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Financeiro</ThemedText>
      <ThemedText>
        Controle seu dinheiro de forma simples e organizada. Acompanhe suas
        receitas, despesas e mantenha suas finanças em dia.
      </ThemedText>
      <TransacoesListScreen />
      <CategoriasListScreen />
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
