import axios from 'axios'

export function sincTelaInicial(){
    return new Promise(result =>{
        axios.get('https://swapi.co/api/films')
        .then(resp=>{
            if(resp.data.results.length > 0 ){
                result(resp.data.results)
            }else{
                result(false)
            }
        })
    })
}