import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { usePocket } from '../contexts/PocketContext';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('User Test');
  const [email, setEmail] = useState('user.test@stests.com');
  const [password, setPassword] = useState('pocketbase');
  const { register, login } = usePocket();

  const handleRegister = () => {
    // Ajouter ici la logique pour l'inscription utilisateur
    console.log('Inscription avec', { name, email, password });
    register(email, password).then(() => {
      console.log('Inscription réussie !!!');
      login(email, password).then(() => {
        navigation.navigate('Home');
        console.log('Auto login after register success !!!');
      }).catch((error) => {
        console.warn('Auto login after register failed', error);
        navigation.navigate('LoginScreen');
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.linkText}>Déjà un compte ? Connectez-vous</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default RegisterScreen;
