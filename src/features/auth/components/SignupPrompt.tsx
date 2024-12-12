// src/features/auth/components/SignupPrompt.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../shared/constants/colors';

const SignupPrompt = () => {
  return (
    <View style={styles.signupContainer}>
      <Text style={styles.signupText}>계정이 없으신가요? </Text>
      <Text style={styles.signupLink}>회원가입</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signupText: {
    color: colors.text.secondary,
  },
  signupLink: {
    color: colors.primary,
    fontWeight: '600',
  },
});

export default SignupPrompt;