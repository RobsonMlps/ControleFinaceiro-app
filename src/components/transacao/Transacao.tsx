import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type TransacaoProps = {
  descricao: string;
  valor: number;
  tipo: string;
  data: string;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function Transacao({
  descricao,
  valor,
  tipo,
  data,
  onPress,
  onEdit,
  onDelete,
}: TransacaoProps) {
  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={onPress} accessibilityRole="button">
        <Text style={styles.descricao}>{descricao}</Text>

        <Text>Valor: R$ {valor.toFixed(2)}</Text>

        <Text>Tipo: {tipo}</Text>

        <Text>Data: {data}</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonEdit} onPress={onEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDelete} onPress={onDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
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
  },

  descricao: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
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
