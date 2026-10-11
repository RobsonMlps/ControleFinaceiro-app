import { ThemedView } from "@/components/themed-view";
import { ITransacao } from "@/interfaces/ITransacao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransacaoDetailScreen() {
  const { transacaoId } = useLocalSearchParams();
  const [transacaoForDetail, setTransacaoForDetail] = useState<ITransacao>();
  const [transacoes, setTransacoes] = useState<ITransacao[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await AsyncStorage.getItem(
          "@ControleFinanceiro-app:transacoes",
        );
        const transacaoData = data != null ? JSON.parse(data) : [];
        setTransacoes(transacaoData);

        transacaoData.forEach((element: ITransacao) => {
          if (element.id.toString() == transacaoId)
            setTransacaoForDetail(element);
        });
      } catch (e) {}
    }

    getData();
  }, []);

  const onDelete = () => {
    if (transacaoForDetail) {
      const newTansacoes: Array<ITransacao> = [];

      for (let index = 0; index < transacoes.length; index++) {
        const transacao = transacoes[index];

        if (transacao.id != transacaoForDetail!.id) {
          newTansacoes.push(transacao);
        }
      }
      setTransacoes(newTansacoes);
      AsyncStorage.setItem(
        "@ControleFinanceiro-app:transacoes",
        JSON.stringify(newTansacoes),
      );
    }
    router.replace("/tabs/TransacoesListScreen");
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <ThemedView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => onDelete()}>
          <Text style={styles.headerButton}>X</Text>
        </TouchableOpacity>
      </ThemedView>
      <View style={styles.box}>
        <Text style={styles.container}>
          {transacaoForDetail ? transacaoForDetail.categoriaId : ""}
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
