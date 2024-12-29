import {  StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { SafeAreaView } from 'react-native';
export default function App() {
   
   const [isGameStarted, setIsGameStarted] = useState();

   function pickedNumberHandler(pickedNumber){
    setIsGameStarted(pickedNumber)
   }

   let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;


   if(isGameStarted){
    screen = <GameScreen />;
   }
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.jpg')} resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
  </ImageBackground>
  </LinearGradient>
)
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
