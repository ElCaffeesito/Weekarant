import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/authNavigator';
import AuthInput from '../components/authInput';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginScreen({ navigation }: Props) {
  const { control, handleSubmit } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log('Login:', data);
    // Aquí conectarías con backend o auth service
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <AuthInput name="email" control={control} placeholder="Email" />
      <AuthInput name="password" control={control} placeholder="Password" secureTextEntry />

      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}><Text style={styles.buttonTitle}>Login</Text></Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}><Text style={styles.buttonTitle}>Go to Register</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingVertical: '20%', paddingHorizontal: '30%' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { borderRadius: 4, backgroundColor: "#777", marginVertical: 4, padding: 7},
  buttonTitle: { fontSize: 18, alignSelf: 'center', color: '#fff' },
});
