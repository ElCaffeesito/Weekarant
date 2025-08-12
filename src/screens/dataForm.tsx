import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import Topbar from "../components/topbar";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/appNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "DataForm">;

interface Item {
  id: number;
  name: string;
}

export default function DataFormScreen({ navigation }: Props) {
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
    <View style={{ flex: 1 }}>
      <Topbar
        title="Gestión"
        onBackPress={() => navigation.goBack()}
        rightIcon="add"
        onRightPress={addItem}
      />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => editItem(item.id)}
                style={styles.iconButton}
              >
                <Ionicons name="pencil" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteItem(item.id)}
                style={styles.iconButton}
              >
                <Ionicons name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
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
  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  actions: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 10,
  },
});
