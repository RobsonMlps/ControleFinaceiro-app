import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function NovaCategoriaScreen() {
  const [nome, setNome] = useState("");
  const [icone, setIcone] = useState("");
  const [cor, setCor] = useState("");

  const adicionarCategoria = () => {
    const novaCategoria = {
      id: Math.floor(Math.random() * 100000),
      nome: nome,
      icone: icone,
      cor: cor,
    };

    console.log("Nova categoria:", novaCategoria);

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Categoria</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Ícone"
        value={icone}
        onChangeText={setIcone}
      />

      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={cor}
        onChangeText={setCor}
      />

      <TouchableOpacity style={styles.buttonAdd} onPress={adicionarCategoria}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonCancel}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    height: 45,
    backgroundColor: "#DDD",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  buttonAdd: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonCancel: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
