import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/appNavigator';
import Topbar from "../components/topbar"

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const formattedDate = `${day}/${month}/${year}`;

type dataForm = {
    date: string;
    amount: string;
};

export default function HomeScreen({ navigation }: Props) {

    return (
        <>
            <View>
                <Topbar title="Home" showBack />
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
                    Login
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Register")}>
                    Register
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
    button: { width: "10%", alignContent: "center", borderRadius: 4, backgroundColor: "#ccc", marginVertical: 4, padding: 7 },
});
