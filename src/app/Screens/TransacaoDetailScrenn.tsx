import { ITransacao } from "@/interfaces/ITransacao";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function TransacaoDetailScreen() {
  const { transacaoId } = useLocalSearchParams();
  const [transacaoForDetail, setTransacaoForDetail] = useState<ITransacao>();
  const [transacoes, setTransacoes] = useState<ITransacao[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
}
