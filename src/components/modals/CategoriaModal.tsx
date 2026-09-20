import { ICategoria } from "@/interfaces/ICategoria";
import { useEffect, useState } from "react";

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

  onEdit: (id: number, nome: string, icone: string, cor: string) => void;

  onCancel: () => void;

  onDelete: (id: number) => void;

  categoria?: ICategoria;
};

export default function CategoriaModal({
  visible,
  onAdd,
  onEdit,
  onCancel,
  onDelete,
  categoria,
}: CategoriaModalProps) {
  const [nome, setNome] = useState("");
  const [icone, setIcone] = useState("");
  const [cor, setCor] = useState("");

  useEffect(() => {
    if (categoria) {
      setNome(categoria.nome);
      setIcone(categoria.icone);
      setCor(categoria.cor);
    } else {
      setNome("");
      setIcone("");
      setCor("");
    }
  }, [categoria]);

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>
            {categoria ? "Editar Categoria" : "Nova Categoria"}
          </Text>

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
            {!categoria && (
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => onAdd(nome, icone, cor)}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            )}

            {categoria && (
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => onEdit(categoria.id, nome, icone, cor)}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.buttonCancel} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            {categoria && (
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => onDelete(categoria.id)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            )}
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
    backgroundColor: "orange",
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  buttonEdit: {
    backgroundColor: "blue",
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  buttonDelete: {
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
