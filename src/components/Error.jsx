import Error404 from'../assets/404.svg'
import '../assets/light-logo.png'
import styled from 'styled-components'
import colors from '../utils/colors'

const Fail = styled.div`
    padding-top : 50px;
    padding-left : 100px;
    padding-right : 100px;
    padding-bottom : 150px;
    margin : 90px;
    background-color : ${colors.backgroundLight};
    width : 70%;
    
`

const Text = styled.h2`
    display flex;
    justify-content : center;
`
function Error(){
    return (
        <Fail>
            <Text>Oups ...</Text>
            <img src={Error404} alt="Erreur 404"/>
            <Text>Il semblerait qu'il ait un problème</Text>
        </Fail>
    )
}

export default Error;