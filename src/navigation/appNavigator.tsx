import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import ManagementScreen from "../screens/managementScreen";
import SummaryScreen from "../screens/summaryScreen";
import DataFormScreen from "../screens/dataForm";

export type RootStackParamList = {
  Home: undefined;
  DataForm: undefined;
  Management: undefined;
  Summary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DataForm"
        component={DataFormScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Management"
        component={ManagementScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Summary"
        component={SummaryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
