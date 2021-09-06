import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabStackNavigator, BotaoStackNavigator, SimplesStackNavigator, ContadorStackNavigator, 
    ParImparStackNavigator, UsuarioLogadoStackNavigator, DigiteSeuNomeStackNavigator, DimensoesFixasStackNavigator,
    FamiliaStackNavigator, ListaProdutosStackNavigator, MegaStackNavigator, CalculoIMCStackNavigator, 
    CalculadoraStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="About" component={TabStackNavigator}/>
            <Drawer.Screen name="Simples" component={SimplesStackNavigator}/>
            <Drawer.Screen name="Botão" component={BotaoStackNavigator}/>
            <Drawer.Screen name="Contador" component={ContadorStackNavigator}/>
            <Drawer.Screen name="ParImpar" component={ParImparStackNavigator}/>
            <Drawer.Screen name="Usuário Logado" component={UsuarioLogadoStackNavigator}/>
            <Drawer.Screen name="Digite o seu nome" component={DigiteSeuNomeStackNavigator}/>
            <Drawer.Screen name="Dimensões Fixas" component={DimensoesFixasStackNavigator}/>
            <Drawer.Screen name="Familia" component={FamiliaStackNavigator}/>
            <Drawer.Screen name="Lista Produtos" component={ListaProdutosStackNavigator}/>
            <Drawer.Screen name="Mega Sena" component={MegaStackNavigator}/>
            <Drawer.Screen name="Cálculo IMC" component={CalculoIMCStackNavigator}/>
            <Drawer.Screen name="Calculadora" component={CalculadoraStackNavigator}/>
        </Drawer.Navigator>
    );
}




export default DrawerNavigator;