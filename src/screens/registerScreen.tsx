import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/appNavigator';
import AuthInput from '../components/authInput';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

type RegisterForm = {
  email: string;
  password: string;
};

export default function RegisterScreen({ navigation }: Props) {
  const { control, handleSubmit } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    console.log('Register:', data);
    // Aquí conectarías con backend o auth service
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
  
        <AuthInput name="email" control={control} placeholder="Email" />
        <AuthInput name="password" control={control} placeholder="Password" secureTextEntry />
  
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}><Text style={styles.buttonTitle}>Register</Text></Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonTitle}>Back to Login</Text></Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingVertical: '20%', paddingHorizontal: '30%' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { borderRadius: 4, backgroundColor: "#777", marginVertical: 4, padding: 7},
  buttonTitle: { fontSize: 18, alignSelf: 'center', color: '#fff' },
});
