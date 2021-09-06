import React from "react";
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./componentes/Home";
import About from "./componentes/About"; 
import Botao from "./componentes/Botao";
import Simples from "./componentes/Simples";
import Contador from "./componentes/Contador";
import ParImpar from "./componentes/ParImpar";
import UsuarioLogado from "./componentes/UsuarioLogado";
import DigiteSeuNome from "./componentes/DigiteSeuNome";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Familia from "./relacao/Familia";
import Membro from "./relacao/Membro";
import ListaProdutos from "./componentes/lista/ListaProdutos";
import Mega from "./componentes/MegaSena/Mega";
import CalculoIMC from "./componentes/CalculoIMC";
import Button from "./componentes/Calculadora/Button";
import Display from "./componentes/Calculadora/Display";
import { thisExpression } from "@babel/types";

const estilos = StyleSheet.create({
    container:{
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
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

function SimplesScreen(){
    return(
        <View>
            <Simples texto="Passando parametro"/>
        </View>
    );
}

function ParImparScreen(){
    return(
        <View>
            <ParImpar numero={10}/>
        </View>
    );
}

function UsuarioLogadoScreen(){
    return(
        <View>
            <UsuarioLogado usuario={{nome:'teste', email:'teste@teste.com'}}/>
            <UsuarioLogado usuario={{nome:'teste2'}}/>
            <UsuarioLogado usuario={{email:'teste@teste.com'}}/>
            <UsuarioLogado usuario={null}/>
            <UsuarioLogado usuario={{}}/>
        </View>
    );
}

function FamiliaScreen(){
    return(
        <View>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva"/>
                <Membro nome="José" sobrenome="Silva"/>
            </Familia>

            <Familia>
                <Membro nome="Bianca" sobrenome="Cunha"/>
                <Membro nome="Gustavo" sobrenome="Cunha"/>
            </Familia>
        </View>
    );
}

function MegaScreen(){
    return(
        <View>
            <Mega qtdeNumeros={7}/>
        </View>
    );
}

function CalculadoraScreen(){

    const initialState = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0,
    }

    const state = {
        ...initialState
    }

    const clearDisplay = () =>{
       const setState=({displayValue: '0'})
    }

    const setDigit = digito => {
      const clearDisplay = state.displayValue === '0'
    || state.clearDisplay

    if (digito === '.' && !clearDisplay 
      && state.displayValue.includes('.')){
      return
    }

    const currentValue = clearDisplay ? '' : state.displayValue
    const displayValue = currentValue + digito
    const setState=({ displayValue, clearDisplay: false})

    if (digito !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...state.values]
      values[state.current] = newValue
      setState({values})
    }
    }

    const setOperation = operation => {

    }

    return(
        <View style={estilos.calculadora}>
            <Display value={state.displayValue}/>
            <View style={estilos.buttons}>
                <Button label='AC' triple onClick={clearDisplay}/>
                <Button label='/' operation onClick={setOperation}/>
                <Button label='7' onClick={setDigit}/>
                <Button label='8' onClick={setDigit}/>
                <Button label='9' onClick={setDigit}/>
                <Button label='*' operation onClick={setOperation}/>
                <Button label='4' onClick={setDigit}/>
                <Button label='5' onClick={setDigit}/>
                <Button label='6' onClick={setDigit}/>
                <Button label='-' operation onClick={setOperation}/>
                <Button label='1' onClick={setDigit}/>
                <Button label='2' onClick={setDigit}/>
                <Button label='3' onClick={setDigit}/>
                <Button label='+' operation onClick={setOperation}/>
                <Button label='0' double onClick={setDigit}/>
                <Button label='.' onClick={setDigit}/>
                <Button label='=' operation onClick={setOperation}/>
            </View>
        </View>
    );
}

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle:{
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Simples" component={SimplesScreen}/>
            <Stack.Screen name="Botão" component={Botao}/>
            <Stack.Screen name="Contador" component={Contador}/>
            <Stack.Screen name="ParImpar" component={ParImparScreen}/>
            <Stack.Screen name="Usuario Logado" component={UsuarioLogadoScreen}/>
            <Stack.Screen name="Digite o seu nome" component={DigiteSeuNome}/>
            <Stack.Screen name="Familia" component={FamiliaScreen}/>
            <Stack.Screen name="Lista Produtos" component={ListaProdutos}/>
        </Stack.Navigator>
    );
}

const TabStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    );
}

const BotaoStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Botão" component={Botao}/>
        </Stack.Navigator>
    )
}

const SimplesStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Simples" component={SimplesScreen}/>
        </Stack.Navigator>
    )
}

const ContadorStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contador" component={Contador}/>
        </Stack.Navigator>
    )
}

const ParImparStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="ParImpar" component={ParImparScreen}/>
        </Stack.Navigator>
    )
}

const UsuarioLogadoStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Usuário Logado" component={UsuarioLogadoScreen}/>
        </Stack.Navigator>
    )
}

const DigiteSeuNomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Digite o seu nome" component={DigiteSeuNome}/>
        </Stack.Navigator>
    )
}

const DimensoesFixasStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Dimensões Fixas" component={DimensoesFixas}/>
        </Stack.Navigator>
    )
}

const FamiliaStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Familia" component={FamiliaScreen}/>
        </Stack.Navigator>
    )
}

const ListaProdutosStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Lista Produtos" component={ListaProdutos}/>
        </Stack.Navigator>
    )
}

const MegaStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Mega sena" component={MegaScreen}/>
        </Stack.Navigator>
    )
}

const CalculoIMCStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Cálculo IMC" component={CalculoIMC}/>
        </Stack.Navigator>
    )
}

const CalculadoraStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Calculadora" component={CalculadoraScreen}/>
        </Stack.Navigator>
    )
}

export {MainStackNavigator, TabStackNavigator, BotaoStackNavigator, SimplesStackNavigator, 
    ContadorStackNavigator, ParImparStackNavigator, UsuarioLogadoStackNavigator, 
    DigiteSeuNomeStackNavigator, DimensoesFixasStackNavigator, FamiliaStackNavigator, 
    ListaProdutosStackNavigator, MegaStackNavigator, CalculoIMCStackNavigator, CalculadoraStackNavigator};