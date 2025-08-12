import React from 'react';
import { View, Text, Button, StyleSheet, Pressable, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/authNavigator';
import Topbar from "../components/topbar"

type Props = NativeStackScreenProps<AuthStackParamList, 'Home'>;

type RootStackParamList = {
    home: undefined;
    dataForm: undefined;
};

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const formattedDate = `${month}/${day}/${year}`;

type managerForm = {
    date: string;
    amount: string;
};

const Stack = createNativeStackNavigator();

function goToHome() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Inicio</Text>
        </View>
    );
}

function goToDataForm() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Perfil</Text>
        </View>
    );
}

function goToManaging() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Perfil</Text>
        </View>
    );
}

function goToSummary() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Perfil</Text>
        </View>
    );
}

export default function HomeScreen({ navigation }: Props) {

    const { control, handleSubmit } = useForm<managerForm>();

    const onSubmit = (data: managerForm) => {
        console.log('Login:', data);
        // se conetca con el backend o auth service
    };

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Topbar title="Gestión" showBack />
                <View style={styles.topBarContent}>
                    <Text>Pantalla Home</Text>
                </View>
            </View>






            {/* <Topbar title="Gestión" showBack />

            <Text style={styles.title}>Weekly Summary</Text>

            <Text style={styles.title} >{formattedDate}</Text>
            <TextInput style={styles.input} />

            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}><Text style={styles.buttonTitle}>Send</Text></Pressable> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', paddingVertical: '20%', paddingHorizontal: '30%' },
    title: { fontSize: 24, marginBottom: 20 },
    button: { borderRadius: 4, backgroundColor: "#777", marginVertical: 4, padding: 7 },
    buttonTitle: { fontSize: 18, alignSelf: 'center', color: '#fff' },
    input: { borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5, },
    topBarContainer: { flex: 1, },
    topBarContent: { flex: 1, alignItems: "center", justifyContent: "center", },
    });
