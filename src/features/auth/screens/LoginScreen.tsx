// src/features/auth/screens/LoginScreen.tsx
import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import AuthHeader from '../components/AuthHeader';
import LoginForm from '../components/LoginForm';
import SignupPrompt from '../components/SignupPrompt';
import { colors } from '../../../shared/constants/colors';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <AuthHeader />
        <LoginForm />
        <SignupPrompt />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
    padding: 24,
  },
});

export default LoginScreen;