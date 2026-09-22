import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TelaTransacao() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  const adicionarTransacao = () => {
    const novaTransacao = {
      id: Math.floor(Math.random() * 100000),
      descricao: descricao,
      valor: Number(valor),
      tipo: tipo,
      data: data,
      categoriaId: Number(categoriaId),
    };

    console.log("Nova transação:", novaTransacao);

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Transação</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo (Entrada/Saída)"
        value={tipo}
        onChangeText={setTipo}
      />

      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />

      <TextInput
        style={styles.input}
        placeholder="ID da Categoria"
        value={categoriaId}
        onChangeText={setCategoriaId}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.buttonAdd} onPress={adicionarTransacao}>
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
