import React from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Card as CD } from 'react-native-elements'
import { estiloTelaInicial } from '../styles/Estilos'
import { Card, CardItem, Text } from 'native-base'
import Alert from '../components/Alert'


export default class FlatListTelaInicial extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            mostraAlerta:false,
            titulo:'',
            episode:'',
            opening_craw:'',
            director:'',
            producer:'',
            release_date:'',
            characters:'',
            planets:'',
            starships:'',
            vehicles:'',
            species:'',
            created:'',
            edited:''
        }
    }

    itensLista = ({ item }) => (
        <TouchableOpacity style={estiloTelaInicial.btnClickCard} 
            onPress={()=>this.setState({
                mostraAlerta:true,
                titulo:item.title,
                episode:item.episode_id,
                opening_craw:item.opening_crawl,
                director:item.director,
                producer:item.producer,
                release_date:item.release_date,
                characters:item.characters.length,
                planets:item.planets.length,
                starships:item.starships.length,
                vehicles:item.vehicles.length,
                species:item.species.length,
                created:item.created,
                edited:item.edited
                })}>
            <Card style={estiloTelaInicial.subCard}>
                <CardItem>
                    <Image
                        source={require('../img/rebel-alliance.png')}
                        style={estiloTelaInicial.imgs}
                        resizeMode='stretch'
                    />
                    <Text style={estiloTelaInicial.textInformation}>{item.title}</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={{ flex: 1}}>
                <Alert
                    visible={this.state.mostraAlerta}
                    close={() => this.setState({ mostraAlerta: false })}
                    titulo={this.state.titulo}
                    episode={this.state.episode}
                    opening_craw={this.state.opening_craw}
                    director = {this.state.director}
                    producer = {this.state.producer}
                    release_date = {this.state.release_date}
                    characters={this.state.characters}
                    planets = {this.state.planets}
                    starships= {this.state.starships}
                    vehicles = {this.state.vehicles}
                    species = {this.state.species}
                    created = {this.state.created}
                    edited = {this.state.edited}
                    icone={<Image source={require('../img/Death-Star-icon.png')} style={{ width: 80, height: 80 }} />}
                    corFundoImg={'#fff'}
                    acaoBtnSim={() =>  this.setState({ mostraAlerta: false }) }
                    txtBtn1={'Close'}
                    
                />
                <CD title={'Movies'}
                    containerStyle={estiloTelaInicial.cards}
                    dividerStyle={estiloTelaInicial.divderCard}
                    titleStyle={estiloTelaInicial.titleCard}
                >
                    <FlatList
                        data={this.props.dados}
                        renderItem={this.itensLista}
                    />
                </CD>
            </View>
        )
    }
}