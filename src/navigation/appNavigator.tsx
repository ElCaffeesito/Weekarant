import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeScreen from "../screens/homeScreen";
import ManagementScreen from "../screens/managementScreen";
import SummaryScreen from "../screens/summaryScreen";
import DataFormScreen from "../screens/dataFormScreen";
import { StyleSheet } from 'react-native';


export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  DataForm: undefined;
  Management: undefined;
  Summary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingVertical: '20%', paddingHorizontal: '30%' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { borderRadius: 4, backgroundColor: "#777", marginVertical: 4, padding: 7 },
  buttonTitle: { fontSize: 18, alignSelf: 'center', color: '#fff' },
  input: { borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5, },
  topBarContainer: { flex: 1, },
  topBarContent: { alignContent: 'space-around', },
});