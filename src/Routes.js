import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import TelaInicial from './routes/TelaInicial'

export default props =>(
    <Router>
        <Stack hideNavBar={true}>
            <Scene key='telaInicial' component={TelaInicial} initial/>
        </Stack>
    </Router>
)