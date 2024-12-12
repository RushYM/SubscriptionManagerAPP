// src/features/auth/components/AuthHeader.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../../../shared/constants/colors';

const AuthHeader = () => {
  return (
    <View style={styles.logoContainer}>
      {/* <Image 
        source={require('../../../assets/logo.png')} 
        style={styles.logo}
      /> */}
      <Text style={styles.title}>SubManager</Text>
      <Text style={styles.subtitle}>
        모든 구독을 한눈에 관리하세요
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 48,
  },
});

export default AuthHeader;