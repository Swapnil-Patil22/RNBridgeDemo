import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  NativeModules,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const {NumberSumModule} = NativeModules;
  const calculateSum = async () => {
    console.log(NumberSumModule);
    try {
      const sum = await NumberSumModule.calculateSum(
        Number(num1),
        Number(num2),
      );
      setResult(`Sum: ${sum}`);
    } catch (error) {
      console.error('Error calculating sum:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={{padding: 20, gap: 10}}>
        <TextInput
          placeholder="Enter number 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={text => setNum1(text)}
        />
        <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />
        <TextInput
          placeholder="Enter number 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={text => setNum2(text)}
          style={{marginTop: 20}}
        />
        <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />

        <Button title="Calculate Sum" onPress={calculateSum} />
        <Text style={{marginTop: 20}}>{result}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
