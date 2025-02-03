import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Añade aquí tu lógica de autenticación
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Toggle</ThemedText>
      </ThemedView>
      {/*<ThemedView style={styles.stepContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </ThemedView>
       Resto del código existente */}

      <ThemedView style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.centeredImage}
        />
        <ThemedText type="subtitle">Etapa 1:</ThemedText>
        <ThemedText>
          Síntese sonora como dispositivo virtual integrado no mobile,
          evoluindo de sistemas .VST ou .dll para um painel de controle de sinal criativo 
          en empírico.
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Etapa 2: </ThemedText>
        <ThemedText>
        Quando estiver pronto, Selecione o instrumento e execute o projeto na aba Experimente, isso
        vai abrir o aplicativo atual.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  reactLogo: {
    height: 178,
    width: 150,
    bottom: 0,
    left: 100,
    position: 'absolute',
  },
  centeredImage: {
    height: 100,
    width: 160,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
