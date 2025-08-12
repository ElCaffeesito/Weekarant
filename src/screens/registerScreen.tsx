import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/authNavigator';
import AuthInput from '../components/authInput';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

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

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});
