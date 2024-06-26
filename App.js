import React from 'react';
import { StyleSheet, View } from 'react-native';
import HangmanGame from './components/HangmanGame';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  const onSuccess = () => {
    this.explosion && this.explosion.start();
  };
  return (
    <View style={styles.container}>
      <HangmanGame onSuccess={onSuccess} />
      <ConfettiCannon autoStart={false} fadeOut={true} count={200} origin={{x: -10, y: 0}} ref={ref => (this.explosion = ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
