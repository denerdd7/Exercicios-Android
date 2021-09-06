import React, {Component} from 'react';
//import {View, StyleSheet} from 'react-native';
//import Button from './componentes/Calculadora/Button';
//import Display from './componentes/Calculadora/Display';

import { NavigationContainer } from '@react-navigation/native';
//import { MainStackNavigator } from './StackNavigator';
//import BottomTabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
//import { MainStackNavigator } from './StackNavigator';

export default App = () => {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

/*const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fonte: {
    fontSize: 40,
  },
  calculadora: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default class App extends Component{
  state = { ...initialState }

  clearDisplay = () => {
    this.setState({...initialState})
  }

  setDigit = digito => {
    const clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay

    if (digito === '.' && !clearDisplay 
      && this.state.displayValue.includes('.')){
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + digito
    this.setState({ displayValue, clearDisplay: false})

    if (digito !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  setOperation = operation =>{
    if (this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    }else{
      const equals = operation ==='='
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch(e){
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }
  }

  render(){
    return(
      <View style={estilos.calculadora}>
        <Display value={this.state.displayValue}/>
        <View style={estilos.buttons}>
          <Button label='AC' triple onClick={this.clearDisplay}></Button>
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.setDigit} />
          <Button label='8' onClick={this.setDigit} />
          <Button label='9' onClick={this.setDigit}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.setDigit}/>
          <Button label='5' onClick={this.setDigit}/>
          <Button label='6' onClick={this.setDigit}/>
          <Button label='-' operation onClick={this.setOperation}/>
          <Button label='1' onClick={this.setDigit}/>
          <Button label='2' onClick={this.setDigit}/>
          <Button label='3' onClick={this.setDigit}/>
          <Button label='+' operation onClick={this.setOperation}/>
          <Button label='0' double onClick={this.setDigit}/>
          <Button label='.'/>
          <Button label='=' operation onClick={this.setOperation}/>
        </View>
      </View>
    );
  }
}*/