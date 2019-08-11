import { StyleSheet, Platform, StatusBar } from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const estiloStatusBar = StyleSheet.create({
    viewStatusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: '#2f3640'
    }
})

const estiloHeader = StyleSheet.create({
    viewHeader:{
        width:'100%',
        height:55,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#2f3640',
        borderBottomWidth:5,
        borderBottomColor:'red',
    },
    textoHeader:{
        fontWeight:'bold',
        fontSize:18,
        color:"yellow"
    }
})

const estiloTelaInicial = StyleSheet.create({
    imgs:{
        width:60,
        height:60
    },
    cards:{
        borderRadius:15,
        borderWidth:5,
        borderColor:'rgba(234, 32, 39,0.7)',
        paddingHorizontal:0,
        padding:0,
    },
    alinhaTextoCard:{
        flexDirection:'row'
    },
    viewTextInformation:{
        backgroundColor:'rgba(234, 32, 39,1.0)', 
        width:'100%', 
        height:38,
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    textInformation:{
        fontWeight:'bold',
        fontSize:16,
        color:"#555",
        marginLeft:25
    },
    divderCard:{
        paddingVertical:2,
        backgroundColor:'rgba(234, 32, 39,1.0)',
        borderRadius:10,
        marginHorizontal:10
    },
    titleCard:{
        fontSize:18,
        fontWeight:'bold'
    },
    btnClickCard:{
        marginHorizontal:15
    },
    subCard:{
        borderRadius:15,
        borderWidth:2,
        borderColor:'red'
    }
})


const estiloAlert = StyleSheet.create({
    offset: {
        flex: 1,
        backgroundColor: 'rgba(52, 73, 94,0.5)'
    },
    viewPrincipal: {
        flex: 1,
        backgroundColor: 'rgba(52, 73, 94,0.5)',
    },
    containerCard: {
        borderRadius: 15,
        marginHorizontal: 15,
        padding: 0,
        marginBottom:15
    },
    alinhaViewImagem: {
        alignItems: 'center',
        marginTop: 10
    },
    viewCard: {
        backgroundColor: 'rgba(52, 73, 94,0.5)'
    },
    viewImagem: {
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: '20%',
    },
    viewTitulo: {
        alignItems: 'center',
        marginTop: 5
    },
    viewSubTitulo: {
        alignItems: 'center',
        margin: 5
    },
    viewEpisode: {
        alignItems: 'flex-start',
        marginHorizontal: 10,
        flexDirection:'row'
    },
    viewOpeningCrawl: {
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal: 10,
        marginTop:10,
        flexDirection:'row'
    },
    txtTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgba(34, 47, 62,1.0)',
        textAlign: 'center'
    },
    txtSubTitulo: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgba(87, 101, 116,1.0)',
  
    },
    viewBtns: {


        flexDirection: 'row',
        marginTop: 13,
    },
    btnSim: {
        backgroundColor: 'rgba(16, 172, 132,1.0)',
        width: '50%',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomLeftRadius: 12,
    },
    btnNao: {
        backgroundColor: 'rgba(238, 82, 83,1.0)',
        width: '50%',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomRightRadius: 12
    },
    txtBtns: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    txtOutraInfo: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(52, 31, 151,1.0)',
        alignItems: 'center',
        textAlign: 'center'
    }
})


export { estiloStatusBar,  estiloHeader, estiloTelaInicial, estiloAlert }