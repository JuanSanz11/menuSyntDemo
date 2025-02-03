import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo1.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Experimente</ThemedText>
      </ThemedView>
      <ThemedText>Esta app inclui um instrumento musical virtual demo, uma base gráfica de um futuro sintetizador e uma aba com link de exemplo direcionada para um site web com o portafolio de disenhos e novas ideias creativas de futuros dispositivos para criação de timbres ou efeitos sonoros.</ThemedText>
      <Collapsible title="Synth01">
        <ThemedText>
          App demo: Voce pode abrir esse projeto no Android, iOs e Web.{' '}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Synth02">
        <ThemedText>
          Disenho de Path, carregando audio tocuhable{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Effects">
        <ThemedText>
          Voce pode ir no nosso site web {' '}
          <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Korl-Synth</ThemedText>
          onde encontrara disenhos de futuros sintetizadores e efeitos sonoros baseados em código de Csound Cabbage
        </ExternalLink>
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.centeredImage}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Contatos: Emails - Telefone - Documentação</ThemedText>
        </ExternalLink>
      </Collapsible>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 100,
    width: 190,
    alignSelf: 'center',
    marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  centeredImage: {
    height: 100,
    width: 160,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
