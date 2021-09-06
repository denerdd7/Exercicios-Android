import React, {useState} from 'react'
import {Button, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

const CalculoIMC = () =>{
    const [peso, setPeso] = useState('0');
    const [altura, setAltura] = useState('0.0');
    const [resultado, setResultado] = useState('0.0');

    function calcular(){ setResultado(peso/(altura*altura))}

    return(
        <>
            <TextInput
                style={Padrao.input}
                placeholder="Digite o seu peso (KG)"
                keyboardType="numeric"
                onChangeText={peso => setPeso(peso.replace(',', '.'))}
            />

            <TextInput
                style={Padrao.input}
                placeholder="Informe a Altura (m)"
                keyboardType="numeric"
                onChangeText={altura => setAltura(altura.replace(',', '.'))}
            />

            <Button
                title="Calcular"
                onPress={calcular}
            />

            <Text>IMC = {resultado}</Text>
        </>
    )
}

export default CalculoIMC;