import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/appNavigator';
import Topbar from "../components/topbar";
import { GlobalState } from '../globals/globals';

type Props = NativeStackScreenProps<RootStackParamList, 'DataForm'>;

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const formattedDate = `${day}/${month}/${year}`;

type dataForm = {
    date: string;
    amount: string;
};

export default function DataFormScreen({ navigation }: Props) {

    const { control, handleSubmit } = useForm<dataForm>();
    const [text, setText] = useState('');

    function saveData(text: string): void {
        GlobalState.push(
        {
            formattedDate: formattedDate,
            amount: text
        }
    )
    };

    return (
        <>
            <View style={styles.topBarContainer}>
                <Topbar title="Home" showBack />
                <View style={styles.topBarContent} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Weekly Summary</Text>

                <Text style={styles.title} >{formattedDate}</Text>
                <TextInput style={styles.input} value={text} onChangeText={setText}  />

                <Pressable style={styles.button} onPress={() => {saveData(text); setText('')}}><Text style={styles.buttonTitle}>Send</Text></Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', paddingVertical: '20%', paddingHorizontal: '30%' },
    title: { fontSize: 24, marginBottom: 20 },
    button: { borderRadius: 4, backgroundColor: "#777", marginVertical: 4, padding: 7 },
    buttonTitle: { fontSize: 18, alignSelf: 'center', color: '#fff' },
    input: { borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5, },
    topBarContainer: { flex: 1, },
    topBarContent: { flex: 1, alignContent: 'space-around', },
});
