import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import { estiloAlert } from '../styles/Estilos'


export default props => (

    <Modal transparent onRequestClose={props.close} visible={props.visible} animationType='fade'>

        <View style={estiloAlert.viewPrincipal}>
            <ScrollView style={{ flex: 1 }}>
                <View style={estiloAlert.offset} />
                <View style={estiloAlert.viewCard}>

                    <Card containerStyle={estiloAlert.containerCard}>
                        <View style={estiloAlert.alinhaViewImagem}>
                            <TouchableOpacity onPress={props.close}>
                                <View style={[estiloAlert.viewImagem, { backgroundColor: props.corFundoImg }]}>
                                    {props.icone}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={estiloAlert.viewTitulo}>
                            <Text style={estiloAlert.txtTitulo}>{props.titulo}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Episode: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.episode}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Director: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.director}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Producer: </Text>
                            <Text style={[estiloAlert.txtSubTitulo,{flex:1}]}>{props.producer}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Release date: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.release_date}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Total Characters: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.characters}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Total Planets: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.planets}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Total Starships: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.starships}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Total Vehicles: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.vehicles}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Total Species: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.species}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Created: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.created}</Text>
                        </View>
                        <View style={estiloAlert.viewEpisode}>
                            <Text style={estiloAlert.txtSubTitulo}>Edited: </Text>
                            <Text style={estiloAlert.txtSubTitulo}>{props.edited}</Text>
                        </View>

                        <View style={estiloAlert.viewSubTitulo}>
                            <Text style={estiloAlert.txtOutraInfo}>{props.opening_craw}</Text>
                        </View>
                    </Card>
                </View>
                <View style={estiloAlert.offset} />
            </ScrollView>
        </View>

    </Modal>


)
