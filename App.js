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
  return output + input;
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

const result = (output, operand, input) => {
  switch (operand) {
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

const CalculativeButton = (property) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity>
        <Text>{property.value}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Calculator = () => {
  //textIput
  //find current character typed
  const operand = ['*', '/', '+', '-'];
  const [currentResult, SetCurrentResult] = useState(0);
  const [currentOperand, SetCurrentOperand] = useState('+');
  const [currentInput, SetCurrentInput] = useState(0);
  return (
    <View>
      <Text style={textStyle()}>
        {currentInput}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <CalculativeButton value='0' />
        <CalculativeButton value='1' />
        <CalculativeButton value='2' />
        <CalculativeButton value='3' />
        <CalculativeButton value='4' />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculativeButton value='5' />
        <CalculativeButton value='6' />
        <CalculativeButton value='7' />
        <CalculativeButton value='8' />
        <CalculativeButton value='9' />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculativeButton value='+' />
        <CalculativeButton value='-' />
        <CalculativeButton value='*' />
        <CalculativeButton value='/' />
        <CalculativeButton value='=' />
      </View>
    </View>);
}

const textStyle = () => {
  return {
    height: '25%',
    width: '100%',
    backgroundColor: '#dddddd',
    borderBottomColor: '#222222',
    borderBottomWidth: 3
  }
}

export default Calculator;
