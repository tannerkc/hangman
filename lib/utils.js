import AsyncStorage from '@react-native-async-storage/async-storage';
import { categories } from './wordUtil';

export const getRandomCategory = () => {
    const categoryKeys = Object.keys(categories);
    const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    return randomCategory;
};
  
export const getRandomWordFromCategory = (category) => {
    const words = categories[category];
    return words[Math.floor(Math.random() * words.length)];
};

export const loadScores = async () => {
  try {
    const savedStreak = await AsyncStorage.getItem('streak');
    const savedHighScore = await AsyncStorage.getItem('highScore');
    return {
      streak: savedStreak !== null ? parseInt(savedStreak, 10) : 0,
      highScore: savedHighScore !== null ? parseInt(savedHighScore, 10) : 0
    };
  } catch (error) {
    console.error('Failed to load scores from storage', error);
    return { streak: 0, highScore: 0 };
  }
};

export const newWord = () => {
    const loadNewWord = async () => {
      setLoading(true);
      let newWord;
      let attempts = 0;

      do {
        newWord = await fetchWord();
        attempts++;
      } while (usedWords.includes(newWord) && attempts < 10);

      if (newWord) {
        setUsedWords([...usedWords, newWord]);
        await AsyncStorage.setItem('usedWords', JSON.stringify([...usedWords, newWord]));
      }

      setWord(newWord);
      setGuessedLetters([]);
      setWrongGuesses(0);
      setLoading(false);
    };
    loadNewWord();
}

export const getRandomWord = async (category) => {
    const difficulty = await calculateWordDifficulty();
    const words = categories[category][difficulty];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

export const calculateWordDifficulty = async () => {
    const streak = await AsyncStorage.getItem('streak');
    if (streak >= 8) {
      return 'hard';
    } else if (streak >= 4) {
      return 'moderate';
    } else {
      return 'easy';
    }
};