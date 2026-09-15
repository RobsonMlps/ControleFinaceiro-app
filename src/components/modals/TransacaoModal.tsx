import { useState } from "react";

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export type TransacaoModalProps = {
  visible: boolean;
  onAdd: (
    descricao: string,
    valor: string,
    tipo: string,
    data: string,
    categoriaId: string,
  ) => void;
  onCancel: () => void;
};

export default function TransacaoModal({
  visible,
  onAdd,
  onCancel,
}: TransacaoModalProps) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TextInput
            style={styles.boxInput}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Tipo (Entrada/Saída)"
            value={tipo}
            onChangeText={setTipo}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Data"
            value={data}
            onChangeText={setData}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="ID da Categoria"
            value={categoriaId}
            onChangeText={setCategoriaId}
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => onAdd(descricao, valor, tipo, data, categoriaId)}
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
