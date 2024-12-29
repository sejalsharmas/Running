import{ TextInput, View, StyleSheet ,Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react';


function StartGameScreen( {onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
       setEnteredNumber(enteredText);
    }
     
    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const choosenNumber = parseInt(enteredNumber);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('Invalid number!',
                'Number has to be between 0 and 99',
                [{text: 'okay', style:'destructive',onPress: resetInputHandler}]
            );
           return;
        }
      onPickNumber(choosenNumber);
        
    }

    return(
      <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType='numeric' autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber} />
        <View style={styles.buttonContainer}>
            <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
             <View style={styles.buttonsContainer}> 
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
      </View>
    );
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        marginHorizontal:24,
        borderRadius:8,
        elevation:20,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:1,
        padding:16,
        backgroundColor:'#4e0329',
},
numberInput:{
  height:60,
  width:60,
  textAlign:'center',
  
  fontSize:32,
  borderBottomColor:'#ddb52f',
  borderBottomWidth:2,
  color:'#ddb52f',
  marginVertical:8,
  fontWeight:'bold', 
},
buttonContainer:{
    flexDirection:'row',
    
},
buttonsContainer:{
    flex:1,
}
});