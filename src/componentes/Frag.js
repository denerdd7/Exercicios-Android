import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

export default props => (
    <>
        <Text style={Padrao.txtG}>{props.titulo}</Text>
        <Text>{props.subTitulo}</Text>
    </>
)