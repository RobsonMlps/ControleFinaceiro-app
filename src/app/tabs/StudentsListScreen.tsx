import { StyleSheet, Text, TouchableOpacity } from "react-native";

import StudentModal from "@/components/modals/Studentmodal";
import MyScrollView from "@/components/MyScollview";
import { ThemedView } from "@/components/themed-view";
import { ISTransacao } from "@/interfaces/ISTransacao";
import Student from "@/students/Student";
import { useState } from "react";

export default function StudentsListScreen() {
  const [students, setStudents] = useState<ISTransacao[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onAdd = (name: string, description: string) => {
    const newStudent: ISTransacao = {
      id: Math.random() * 1000,
      nome: name,
      description: description,
    };

    const studentsPlus: ISTransacao[] = [...students, newStudent];

    setStudents(studentsPlus);
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

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
        <TouchableOpacity onPress={() => openModal()}>
          <Text style={styles.headerButton}>+</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.container}>
        {students.map((student) => (
          <Student
            key={student.id}
            title={student.nome}
            subtitle={student.description}
          />
        ))}
      </ThemedView>

      <StudentModal
        visible={modalVisible}
        onCancel={closeModal}
        onAdd={onAdd}
      />
    </MyScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  reactLogo: {
    bottom: 0,
    left: 0,
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
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
