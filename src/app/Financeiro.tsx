import { Platform, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

import CategoriasListScreen from "./tabs/CategoriaListScreen";
import Localizacao from "./tabs/Localizacao";
import TransacoesListScreen from "./tabs/TransacoesListScreen";

export default function FinanceiroScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Cabeçalho */}
          <ThemedView style={styles.heroSection}>
            <ThemedText type="title" style={styles.title}>
              Controle Financeiro
            </ThemedText>

            <ThemedText style={styles.description}>
              Controle seu dinheiro de forma simples e organizada. Acompanhe
              suas receitas, despesas e mantenha suas finanças em dia.
            </ThemedText>
            <ThemedText style={styles.title}>
              Localização: <Localizacao />
            </ThemedText>
          </ThemedView>

          {/* Transações */}
          <ThemedView type="backgroundElement" style={styles.sectionContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Transações
            </ThemedText>

            <TransacoesListScreen />
          </ThemedView>

          {/* Categorias */}
          <ThemedView type="backgroundElement" style={styles.sectionContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Categorias
            </ThemedText>

            <CategoriasListScreen />
          </ThemedView>

          {Platform.OS === "web" && <WebBadge />}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    maxWidth: MaxContentWidth,
    paddingBottom: BottomTabInset + Spacing.three,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingVertical: Spacing.four,
    gap: Spacing.four,
  },

  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
    gap: Spacing.three,
  },

  title: {
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    lineHeight: 22,
  },

  sectionContainer: {
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
    gap: Spacing.three,
  },

  sectionTitle: {
    textAlign: "center",
  },
});
