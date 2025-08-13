import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import Topbar from "../components/topbar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/appNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Summary">;

interface Item {
  id: number;
  name: string;
}

export default function SummaryScreen({ navigation }: Props) {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Elemento 1" },
    { id: 2, name: "Elemento 2" },
    { id: 3, name: "Elemento 3" },
  ]);

  const addItem = () => {
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    setItems((prev) => [...prev, { id: newId, name: `Elemento ${newId}` }]);
  };

  const editItem = (id: number) => {
    if (Platform.OS === "ios") {
      Alert.prompt(
        "Editar elemento",
        "Escribe el nuevo nombre",
        (text) => {
          if (text) {
            setItems((prev) =>
              prev.map((item) =>
                item.id === id ? { ...item, name: text } : item
              )
            );
          }
        },
        "plain-text",
        items.find((item) => item.id === id)?.name || ""
      );
    } else {
      Alert.alert("Editar", "En Android usa un modal personalizado para edición");
    }
  };

  const deleteItem = (id: number) => {
    Alert.alert("Eliminar", "¿Estás seguro?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: () => setItems((prev) => prev.filter((i) => i.id !== id)),
      },
    ]);
  };

  return (
    <>
      <Topbar
        title="Summary"
      />

      <View style={styles.mainContainer}>
        <View style={styles.row}>
      <View style={styles.bigColumn}>
        <Text style={styles.text}>Aqui van graficas si son necesarias</Text>
      </View>
      <View style={styles.smallColumn}>
        <Text style={styles.text}>Aqui van los textos con los datos y con colores de semaforo</Text>
      </View>
    </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
  },
  bigColumn: {
    flex: 2,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5
  },
  smallColumn: {
    flex: 1,
    backgroundColor: '#e67e22',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  mainContainer: {
    width: "95%",
    height: "90%",
    backgroundColor: "#ccc",
    margin: 10,
    alignSelf: "center",
    borderRadius: 5
  },
});
