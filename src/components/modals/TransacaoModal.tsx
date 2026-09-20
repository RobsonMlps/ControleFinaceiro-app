import { ITransacao } from "@/interfaces/ITransacao";
import { useEffect, useState } from "react";

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

  onEdit: (
    id: number,
    descricao: string,
    valor: string,
    tipo: string,
    data: string,
    categoriaId: string,
  ) => void;

  onCancel: () => void;

  onDelete: (id: number) => void;

  transacao?: ITransacao;
};

export default function TransacaoModal({
  visible,
  onAdd,
  onEdit,
  onCancel,
  onDelete,
  transacao,
}: TransacaoModalProps) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  useEffect(() => {
    if (transacao) {
      setDescricao(transacao.descricao);
      setValor(transacao.valor.toString());
      setTipo(transacao.tipo);
      setData(transacao.data);
      setCategoriaId(transacao.categoriaId.toString());
    } else {
      setDescricao("");
      setValor("");
      setTipo("");
      setData("");
      setCategoriaId("");
    }
  }, [transacao]);

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
            {/* ADICIONAR */}
            {!transacao && (
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => onAdd(descricao, valor, tipo, data, categoriaId)}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            )}

            {/* EDITAR */}
            {transacao && (
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() =>
                  onEdit(
                    transacao.id,
                    descricao,
                    valor,
                    tipo,
                    data,
                    categoriaId,
                  )
                }
                disabled={!transacao.id || transacao.id <= 0}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
            )}

            {/* CANCELAR */}
            <TouchableOpacity style={styles.buttonCancel} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            {/* EXCLUIR */}
            {transacao && (
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => onDelete(transacao.id)}
                disabled={!transacao.id || transacao.id <= 0}
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

  buttonEdit: {
    backgroundColor: "blue",
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
