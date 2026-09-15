import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useState } from "react";

import MyScrollView from "@/components/MyScollview";
import { ThemedView } from "@/components/themed-view";

import TransacaoModal from "@/components/modals/TransacaoModal";
import Transacao from "@/components/transacao/Transacao";

import { ITransacao } from "@/interfaces/ITransacao";

export default function TransacoesListScreen() {
  const [transacoes, setTransacoes] = useState<ITransacao[]>([]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // CREATE
  const onAdd = (
    descricao: string,
    valor: string,
    tipo: string,
    data: string,
    categoriaId: string,
  ) => {
    const novaTransacao: ITransacao = {
      id: Math.random() * 1000,

      descricao: descricao,

      valor: Number(valor),

      tipo: tipo,

      data: data,

      categoriaId: Number(categoriaId),
    };

    const transacoesPlus: ITransacao[] = [...transacoes, novaTransacao];

    setTransacoes(transacoesPlus);

    setModalVisible(false);
  };

  // ABRIR MODAL
  const openModal = () => {
    setModalVisible(true);
  };

  // FECHAR MODAL
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <MyScrollView
      headerBackgroundColor={{
        light: "#A1CEDC",
        dark: "#1D3D47",
      }}
    >
      <ThemedView style={styles.headerContainer}>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.headerButton}>+</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.container}>
        {transacoes.map((transacao) => (
          <Transacao
            key={transacao.id}
            descricao={transacao.descricao}
            valor={transacao.valor}
            tipo={transacao.tipo}
            data={transacao.data}
          />
        ))}
      </ThemedView>

      <TransacaoModal
        visible={modalVisible}
        onCancel={closeModal}
        onAdd={onAdd}
      />
    </MyScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },

  headerContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  headerButton: {
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 20,
  },
});
