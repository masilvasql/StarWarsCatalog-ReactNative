import React from 'react'
import { View, Text } from 'react-native'
import { estiloHeader } from '../styles/Estilos'

export default props =>(
    <View style={estiloHeader.viewHeader}>
        <Text style={estiloHeader.textoHeader}>{props.titulo}</Text>
    </View>
)