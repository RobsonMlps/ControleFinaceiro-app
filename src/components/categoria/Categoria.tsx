import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type CategoriaProps = {
  nome: string;
  icone: string;
  cor: string;
  onEdit: () => void;
  onDelete: () => void;
};

export default function Categoria({
  nome,
  icone,
  cor,
  onEdit,
  onDelete,
}: CategoriaProps) {
  return (
    <View style={[styles.box, { borderLeftColor: cor }]}>
      <Text style={styles.icone}>{icone}</Text>

      <View style={styles.content}>
        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cor}>Cor: {cor}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonEdit} onPress={onEdit}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDelete} onPress={onDelete}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
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

  content: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },

  buttonEdit: {
    backgroundColor: "blue",
    borderRadius: 5,
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginRight: 5,
  },

  buttonDelete: {
    backgroundColor: "red",
    borderRadius: 5,
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginLeft: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
