import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface AuthInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
}

export default function AuthInput({ name, control, ...inputProps }: AuthInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          {...inputProps}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});
