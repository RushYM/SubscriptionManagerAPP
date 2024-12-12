import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../constants/colors';

interface InputProps extends TextInputProps {
  error?: boolean;
}

const Input = ({ error, style, ...props }: InputProps) => {
  return (
    <TextInput
      style={[
        styles.input,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },

});

export default Input;