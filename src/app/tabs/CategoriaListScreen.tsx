import { StyleSheet, Text, TouchableOpacity } from "react-native";

import MyScrollView from "@/components/MyScollview";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";

import Categoria from "@/components/categoria/Categoria";
import CategoriaModal from "@/components/modals/CategoriaModal";

import { ICategoria } from "@/interfaces/ICategoria";

export default function CategoriasListScreen() {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // CREATE
  const onAdd = (nome: string, icone: string, cor: string) => {
    const novaCategoria: ICategoria = {
      id: Math.random() * 1000,

      nome: nome,

      icone: icone,

      cor: cor,
    };

    const categoriasPlus: ICategoria[] = [...categorias, novaCategoria];

    setCategorias(categoriasPlus);

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
        {categorias.map((categoria) => (
          <Categoria
            key={categoria.id}
            nome={categoria.nome}
            icone={categoria.icone}
            cor={categoria.cor}
          />
        ))}
      </ThemedView>

      <CategoriaModal
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
