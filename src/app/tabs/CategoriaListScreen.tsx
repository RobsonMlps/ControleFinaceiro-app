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

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    ICategoria | undefined
  >(undefined);

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

  // UPDATE
  const onEdit = (id: number, nome: string, icone: string, cor: string) => {
    const categoriasEditadas = categorias.map((categoria) => {
      if (categoria.id === id) {
        return { ...categoria, nome, icone, cor };
      }

      return categoria;
    });

    setCategorias(categoriasEditadas);
    setModalVisible(false);
    setCategoriaSelecionada(undefined);
  };

  // DELETE
  const onDelete = (id: number) => {
    const categoriasFiltradas = categorias.filter(
      (categoria) => categoria.id !== id,
    );

    setCategorias(categoriasFiltradas);
    setModalVisible(false);
    setCategoriaSelecionada(undefined);
  };

  // ABRIR MODAL
  const openModal = () => {
    setCategoriaSelecionada(undefined);
    setModalVisible(true);
  };

  // ABRIR MODAL PARA EDITAR
  const openEdit = (categoria: ICategoria) => {
    setCategoriaSelecionada(categoria);
    setModalVisible(true);
  };

  // ABRIR MODAL PARA EXCLUIR
  const openDelete = (categoria: ICategoria) => {
    setCategoriaSelecionada(categoria);
    setModalVisible(true);
  };

  // FECHAR MODAL
  const closeModal = () => {
    setModalVisible(false);
    setCategoriaSelecionada(undefined);
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
            onEdit={() => openEdit(categoria)}
            onDelete={() => openDelete(categoria)}
          />
        ))}
      </ThemedView>

      <CategoriaModal
        visible={modalVisible}
        onCancel={closeModal}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        categoria={categoriaSelecionada}
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
