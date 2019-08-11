import React from 'react'
import { View, Alert, Text, Image} from 'react-native'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'

import { sincTelaInicial } from '../functions/SincTelaInicial'
import FlatListTelaInicial from '../components/FlatListTelaInicial';

export default class TelaInicial extends React.Component {

    constructor(){
        super()
        this.state = {
            dados : []
        }
    }

    componentDidMount(){
        this.buscaDados()
    }

    async buscaDados(){
        let result = await sincTelaInicial()
        if(result){
            this.setState({dados:result})
        }else{
            Alert.alert("Aviso!", "Falha ao buscar os dados...", [{text:'Ok'}])
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar/>
                <Header titulo = 'Star Wars Catalog'/>
                <View style={{flex:1, marginBottom:15}}>
                    {
                        this.state.dados.length == 0
                        ? <View style={{flex:1}}>
                            <Image 
                                source={require('../img/load1.gif')}
                                resizeMode='cover'
                                style={{width:'100%', height:'100%'}}
                                />

                        </View>
                        : <FlatListTelaInicial  dados ={this.state.dados}/>
                    }
                   
                </View>
            </View>
        )
    }
}