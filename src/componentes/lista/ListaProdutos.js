import React from 'react'
import {FlatList, Text} from 'react-native'
import Padrao from '../../estilo/Padrao';

import produtos from './produtos';

const ListaProdutos = () => {
    return(
        <>
            <Text style={Padrao.txtG}>Lista de Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={ i => i.id }
                renderItem={({item:obj}) => {
                    return <Text>{obj.id} - {obj.descricao} R$ {obj.preco}</Text>
                }}
            />
        </>
    )
}

export default ListaProdutos;