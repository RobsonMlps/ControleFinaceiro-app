import { useState } from "react";

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export type CategoriaModalProps = {
  visible: boolean;

  onAdd: (nome: string, icone: string, cor: string) => void;

  onCancel: () => void;
};

export default function CategoriaModal({
  visible,
  onAdd,
  onCancel,
}: CategoriaModalProps) {
  const [nome, setNome] = useState("");
  const [icone, setIcone] = useState("");
  const [cor, setCor] = useState("");

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>Nova Categoria</Text>

          <TextInput
            style={styles.boxInput}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Ícone (ex: 🍔)"
            value={icone}
            onChangeText={setIcone}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Cor (ex: #FF0000)"
            value={cor}
            onChangeText={setCor}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => onAdd(nome, icone, cor)}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCancel} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    flex: 1,
  },

  boxContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  boxInput: {
    alignSelf: "stretch",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#DDD",
    margin: 5,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 70,
  },

  buttonAdd: {
    backgroundColor: "green",
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  buttonCancel: {
    backgroundColor: "red",
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  buttonText: {
    fontWeight: "bold",
    color: "#FFF",
  },
});
