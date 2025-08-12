// components/Topbar.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/appNavigator"; // Ajusta a tu tipo

interface TopbarProps {
  title: string;
  showBack?: boolean;
}

export default function Topbar({ title, showBack = false }: TopbarProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DataForm")}>
        <Text style={styles.link}>DataForm</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Management")}>
        <Text style={styles.link}>Management</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Summary")}>
        <Text style={styles.link}>Summary</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  link: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between"
  },
});

