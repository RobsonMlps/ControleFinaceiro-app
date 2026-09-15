import { StyleSheet, Text, View } from "react-native";

export type CategoriaProps = {
  nome: string;
  icone: string;
  cor: string;
};

export default function Categoria({ nome, icone, cor }: CategoriaProps) {
  return (
    <View style={[styles.box, { borderLeftColor: cor }]}>
      <Text style={styles.icone}>{icone}</Text>

      <View>
        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cor}>Cor: {cor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    borderLeftWidth: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  icone: {
    fontSize: 30,
    marginRight: 15,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  cor: {
    fontSize: 12,
    marginTop: 5,
  },
});
