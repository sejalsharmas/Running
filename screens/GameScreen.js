import { View, Text ,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import Title from '../components/Title';
function GameScreen (){
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View>

      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
    },
  
})