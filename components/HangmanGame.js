import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { getRandomCategory, getRandomWordFromCategory, loadScores } from '../lib/utils';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

const HangmanGame = ({onSuccess}) => {
  const [category, setCategory] = useState(getRandomCategory());
  const [word, setWord] = useState(getRandomWordFromCategory(category));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const maxWrongGuesses = 6;
  const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isGameWon = word.split('').every(letter => guessedLetters.includes(letter));

  // useEffect for loading saved scores
  useEffect(() => {
    const initializeScores = async () => {
      const { streak, highScore } = await loadScores();
      setStreak(streak);
      setHighScore(highScore);
    };
    initializeScores();
  }, []);

  // useEffect for setting random word on category change
  useEffect(() => {
    setWord(getRandomWordFromCategory(category));
  }, [category]);

  // useEffect for handling game status changes
  useEffect(() => {
    if (isGameOver) {
      handleGameOver();
    } else if (isGameWon) {
      handleGameWon();
    }
  }, [isGameOver, isGameWon]);

  const restart = () => {
    const newCategory = getRandomCategory();
    setCategory(newCategory);
    setWord(getRandomWordFromCategory(newCategory));
    setGuessedLetters([]);
    setWrongGuesses(0);
  }

  const handleGameOver = async () => {
    await AsyncStorage.setItem('streak', '0');
    setStreak(0);
  };

  const handleGameWon = async () => {
    const newStreak = streak + 1;
    await AsyncStorage.setItem('streak', newStreak.toString());
    setStreak(newStreak);

    if (newStreak > highScore) {
      await AsyncStorage.setItem('highScore', newStreak.toString());
      setHighScore(newStreak);
    }

    onSuccess()
    setTimeout(restart, 2000);
  };

  const handleGuess = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      letter === ' ' ? (
        <View key={index} style={styles.space}></View>
      ) : (
        <View key={index} style={styles.glassSquare}>
          <Text style={styles.letter}>
            {guessedLetters.includes(letter) ? letter : ''}
          </Text>
        </View>
      )
    ));
  };

  const renderAlphabetButtons = () => {
    return alphabet.map((letter, index) => (
      <TouchableOpacity 
        key={index} 
        style={[
          styles.alphabetButton, 
          guessedLetters.includes(letter) ? styles.disabledButton : {}
        ]} 
        onPress={() => handleGuess(letter)}
        disabled={guessedLetters.includes(letter)}
      >
        <Text style={[styles.alphabetButtonText, 
          guessedLetters.includes(letter) ? styles.disabledButtonText : {}]}>{letter}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>streak</Text>
        <Text style={styles.streak}>{streak}</Text>
      </View>
      <View style={styles.highScoreContainer}>
        <Text style={styles.highScoreText}>highscore</Text>
        <Text style={styles.highScore}>{highScore}</Text>
      </View>
      <Text style={styles.title}>{category}</Text>
      <View style={styles.wordContainer}>{renderWord()}</View>
      <View style={styles.progressBarContainer}>
        <Progress.Bar progress={(wrongGuesses / maxWrongGuesses) * 1} color='rgba(23, 23, 23, 0.95)' borderColor='white' unfilledColor='white' width={300} />
      </View>
      {isGameOver ? (
        <Text style={styles.gameOverText}>Loser! The word was: {word}</Text>
      ) : isGameWon ? (
        <Text style={styles.title}>🥳</Text>
      ) : (
        <View style={styles.alphabetContainer}>
          {renderAlphabetButtons()}
        </View>
      )}
      {/* <Button title="Restart" onPress={restart} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(23, 23, 23, 0.95)'
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#fff'
  },
  streakContainer: {
    position: 'absolute',
    top: 80,
    left: 40,
  },
  streak: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  streakText: {
    color: '#fff'
  },
  highScoreContainer: {
    position: 'absolute',
    top: 80,
    right: 40,
  },
  highScore: {
    fontSize: 32,
    color: '#fff',
    alignSelf: 'flex-end'
  },
  highScoreText: {
    color: '#fff'
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  glassSquare: {
    maxWidth: 45,
    flex: 1,
    height: 45,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  letter: {
    fontSize: 22,
    color: 'white',
  },
  space: {
    width: 20,
  },
  progressBarContainer: {
    marginVertical: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'red',
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  alphabetButton: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  disabledButtonText: {
    color: 'rgba(255, 255, 255, 0.45)'
  },
  alphabetButtonText: {
    color: '#000',
    fontSize: 16,
  },
  gameOverText: {
    color: 'red',
    fontSize: 20,
  },
  gameWonText: {
    color: 'green',
    fontSize: 20,
  },
});

export default HangmanGame;
