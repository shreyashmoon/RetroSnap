// Login/Sign Up Screen (Supabase Auth)

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { supabase } from '../supabaseClient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const { error, user } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) Alert.alert('Login Error', error.message);
    else navigation.navigate('Camera'); // On success, go to Camera
  };

  // Placeholder for Google Sign-In
  const handleGoogleSignIn = async () => {
    Alert.alert('Google Sign-In', 'Google Sign-In is not yet implemented.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#d9c9b2"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#d9c9b2"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eye}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSpacing}><Button title={loading ? 'Loading...' : 'Sign In'} onPress={handleSignIn} disabled={loading} /></View>
        <View style={styles.buttonSpacing}><Button title="Sign In with Google" onPress={handleGoogleSignIn} /></View>
      </View>
      <TouchableOpacity style={styles.footerLinkArea} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>New user? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0a1a33',
    padding: 16,
  },
  form: {
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  color: '#d9c9b2'
  },
  input: {
    width: '100%',
    maxWidth: 300,
    height: 40,
  borderColor: '#3a4d6b',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  color: '#d9c9b2'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  borderColor: '#3a4d6b',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  color: '#d9c9b2'
  },
  eye: {
    fontSize: 20,
    marginLeft: 10,
  color: '#d9c9b2'
  },
  buttonSpacing: {
    width: '100%',
    maxWidth: 300,
    marginTop: 14,
  },
  footerLinkArea: {
    paddingVertical: 24,
  },
  linkText: {
    color: '#d9c9b2',
    fontSize: 14,
    textDecorationLine: 'underline'
  },
});
