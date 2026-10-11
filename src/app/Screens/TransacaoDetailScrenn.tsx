import TransacaoModal from "@/components/modals/TransacaoModal";
import { ThemedView } from "@/components/themed-view";
import { ITransacao } from "@/interfaces/ITransacao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransacaoDetailScreen() {
  const { transacaoId } = useLocalSearchParams<{ transacaoId: string }>();
  const [transacaoForDetail, setTransacaoForDetail] = useState<ITransacao>();
  const [transacoes, setTransacoes] = useState<ITransacao[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await AsyncStorage.getItem(
          "@ControleFinanceiro-app:transacoes",
        );
        const transacaoData: ITransacao[] = data ? JSON.parse(data) : [];
        setTransacoes(transacaoData);
        setTransacaoForDetail(
          transacaoData.find(
            (transacao) => transacao.id.toString() === transacaoId,
          ),
        );
      } catch {
        setTransacoes([]);
        setTransacaoForDetail(undefined);
      }
    }

    getData();
  }, [transacaoId]);

  const onAdd = () => {};

  const onEdit = (
    id: number,
    descricao: string,
    valor: string,
    tipo: string,
    data: string,
    categoriaId: string,
  ) => {
    const transacoesAtualizadas = transacoes.map((transacao) =>
      transacao.id === id
        ? {
            ...transacao,
            descricao,
            valor: Number(valor),
            tipo,
            data,
            categoriaId: Number(categoriaId),
          }
        : transacao,
    );

    setTransacoes(transacoesAtualizadas);
    setTransacaoForDetail(
      transacoesAtualizadas.find((transacao) => transacao.id === id),
    );
    void AsyncStorage.setItem(
      "@ControleFinanceiro-app:transacoes",
      JSON.stringify(transacoesAtualizadas),
    );
    setModalVisible(false);
  };

  const onDelete = async (id: number) => {
    const transacoesAtualizadas = transacoes.filter(
      (transacao) => transacao.id !== id,
    );

    setTransacoes(transacoesAtualizadas);
    await AsyncStorage.setItem(
      "@ControleFinanceiro-app:transacoes",
      JSON.stringify(transacoesAtualizadas),
    );
    router.replace("/tabs/TransacoesListScreen");
  };

  const onCancel = () => setModalVisible(false);

  return (
    <View>
      <ThemedView style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => transacaoForDetail && onDelete(transacaoForDetail.id)}
          disabled={!transacaoForDetail}
        >
          <Text style={styles.headerButton}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          disabled={!transacaoForDetail}
        >
          <Text style={styles.headerButton}>Editar</Text>
        </TouchableOpacity>
      </ThemedView>
      <View style={styles.box}>
        <Text style={styles.container}>
          {transacaoForDetail
            ? `Categoria: ${transacaoForDetail.categoriaId}`
            : "Transação não encontrada."}
        </Text>
        <Text style={styles.container}>
          {transacaoForDetail ? transacaoForDetail.descricao : ""}
        </Text>
        <Text style={styles.container}>
          {transacaoForDetail ? transacaoForDetail.valor : ""}
        </Text>
        <Text style={styles.container}>
          {transacaoForDetail ? transacaoForDetail.tipo : ""}
        </Text>
        <Text style={styles.container}>
          {transacaoForDetail ? transacaoForDetail.data : ""}
        </Text>
      </View>
      <TransacaoModal
        visible={modalVisible}
        transacao={transacaoForDetail}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        onCancel={onCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },

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
