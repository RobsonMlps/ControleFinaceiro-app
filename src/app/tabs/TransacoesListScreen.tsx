import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import MyScrollView from "@/components/MyScollview";
import { ThemedView } from "@/components/themed-view";

import TransacaoModal from "@/components/modals/TransacaoModal";
import Transacao from "@/components/transacao/Transacao";

import { ITransacao } from "@/interfaces/ITransacao";

export default function TransacoesListScreen() {
  const [transacoes, setTransacoes] = useState<ITransacao[]>([]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [transacaoSelecionada, setTransacaoSelecionada] = useState<
    ITransacao | undefined
  >(undefined);

  // CREATE
  const onAdd = (
    descricao: string,
    valor: string,
    tipo: string,
    data: string,
    categoriaId: string,
  ) => {
    const novaTransacao: ITransacao = {
      id: Math.floor(Math.random() * 100000),
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

  // UPDATE
  const onEdit = (
    id: number,
    descricao: string,
    valor: string,
    tipo: string,
    data: string,
    categoriaId: string,
  ) => {
    const transacoesEditadas = transacoes.map((transacao) => {
      if (transacao.id === id) {
        return {
          ...transacao,
          descricao: descricao,
          valor: Number(valor),
          tipo: tipo,
          data: data,
          categoriaId: Number(categoriaId),
        };
      }

      return transacao;
    });

    setTransacoes(transacoesEditadas);

    setModalVisible(false);
    setTransacaoSelecionada(undefined);
  };

  // DELETE
  const onDelete = (id: number) => {
    const transacoesFiltradas = transacoes.filter(
      (transacao) => transacao.id !== id,
    );

    setTransacoes(transacoesFiltradas);

    setModalVisible(false);
    setTransacaoSelecionada(undefined);
  };

  // ABRIR MODAL PARA ADICIONAR
  const openModal = () => {
    setTransacaoSelecionada(undefined);
    setModalVisible(true);
  };

  // ABRIR MODAL PARA EDITAR
  const openEdit = (transacao: ITransacao) => {
    setTransacaoSelecionada(transacao);
    setModalVisible(true);
  };

  // ABRIR MODAL PARA EXCLUIR
  const openDelete = (transacao: ITransacao) => {
    setTransacaoSelecionada(transacao);
    setModalVisible(true);
  };

  // FECHAR MODAL
  const closeModal = () => {
    setModalVisible(false);
    setTransacaoSelecionada(undefined);
  };

  return (
    <MyScrollView
      headerBackgroundColor={{
        light: "#A1CEDC",
        dark: "#1D3D47",
      }}
    >
      {/* BOTÃO + */}
      <ThemedView style={styles.headerContainer}>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.headerButton}>+</Text>
        </TouchableOpacity>
      </ThemedView>

      {/* LISTA DE TRANSAÇÕES */}
      <ThemedView style={styles.container}>
        {transacoes.map((transacao) => (
          <Transacao
            key={transacao.id}
            descricao={transacao.descricao}
            valor={transacao.valor}
            tipo={transacao.tipo}
            data={transacao.data}
            onEdit={() => openEdit(transacao)}
            onDelete={() => openDelete(transacao)}
          />
        ))}
      </ThemedView>

      {/* MODAL */}
      <TransacaoModal
        visible={modalVisible}
        onCancel={closeModal}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        transacao={transacaoSelecionada}
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
