import { StyleSheet, Text, View } from "react-native";

export type TransacaoProps = {
  descricao: string;
  valor: number;
  tipo: string;
  data: string;
};

export default function Transacao({
  descricao,
  valor,
  tipo,
  data,
}: TransacaoProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.descricao}>{descricao}</Text>

      <Text>Valor: R$ {valor.toFixed(2)}</Text>

      <Text>Tipo: {tipo}</Text>

      <Text>Data: {data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },

  descricao: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
