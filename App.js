/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  TouchableOpacity,
  Button,
  FlatList,
  Text,
  TextInput,
  View,
} from 'react-native';

const add = (output, input) => {
  return +output + +input;
}

const subtract = (output, input) => {
  return output - input;
}

const multiply = (output, input) => {
  return output * input;
}

const divide = (output, input) => {
  return output / input;
}

const result = (output, operator, input) => {
  switch (operator) {
    case '*':
      return multiply(output, input);
      break;
    case '/':
      return divide(output, input);
      break;
    case '+':
      return add(output, input);
      break;
    case '-':
      return subtract(output, input);
      break;
  }
}

const buttonStyle = () => {
  return {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 20,
    borderColor: '#111111',
    borderWidth: 4
  }
}

const Calculator = () => {
  //textIput
  //find current character typed
  const operand = ['*', '/', '+', '-'];
  const [currentResult, SetCurrentResult] = useState(0);
  const [currentOperator, SetCurrentOperator] = useState('+');
  const [currentInput, SetCurrentInput] = useState(0);
  //const [currentText, SetCurrentText] = useState(0);

  const onNumber = (value) => {
    SetCurrentInput(`${currentInput}${value}`);
    console.log(`${value} pressed`);
  }

  const onOperator = (operator) => {
    SetCurrentResult(result(currentResult, currentOperator, currentInput));
    SetCurrentOperator(operator);
    SetCurrentInput(0);
  }

  const onEqualTo = () => {
    SetCurrentResult(result(currentResult, currentOperator, currentInput));
    SetCurrentOperator('+');
    SetCurrentInput(0);
  }

  const onPress = (value) => {
    // SetCurrentInput(`${currentInput}${value}`)
    (/[0-9]/).test(value) ? 
    onNumber(value) :
    (/[+*/-]/).test(value) ?
    onOperator(value):
    onEqualTo();
  }

  const CalculativeButton = (property) => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={buttonStyle()}
          onPress={() => onPress(property.value)}>
          <Text
            style={{ fontSize: 20 }}>
            {property.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  //Set of buttons

  const buttons = ['0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9',
    '+', '-', '*', '/', '='];

  const rowEntry = (m, n) => {
    var row = [];
    for (let i = m; i < n; ++i) {
      row.push(<CalculativeButton value={buttons[i]} key={i}/>)
    }
    return row;
  }

  return (
    <View>
      <Text style={textStyle()}>
        {currentResult}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        {rowEntry(0, 5)}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {rowEntry(5, 10)}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {rowEntry(10, 15)}
      </View>
    </View>);
}

const textStyle = () => {
  return {
    textAlign: 'right',
    fontSize: 40,
    height: '25%',
    width: '100%',
    backgroundColor: '#dddddd',
    borderBottomColor: '#222222',
    borderBottomWidth: 3,
  }
}

export default Calculator;
