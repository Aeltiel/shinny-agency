import HomeIllu from '../assets/home-illustration.svg'
import colors from '../utils/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display : flex;
    flex-wrap : wrap;
    background-color : ${colors.backgroundLight};
    margin : 3%;
    padding : 70px;
`
const Titre = styled.p`
    width : 50%;
    font-family : 'Trébuchet MS', Helvetica, sans-serif;
    font-size : 55px;
    line-height : 90px;
    align-self : center;
    padding-right : 15px;
    padding-left : 50px;
    
`
const StyledLink = styled(Link)`
        padding-left: 50px;
        padding-right: 70px;
        padding-top : 5px;
        padding-bottom : 5px;
        height : 20px;
        text-decoration : none;
        color : white;
        border-radius : 30px;
        background-color : ${colors.primary};
`
function Home() {
    return (
        <Container>
            <Titre>Reprérez vos besoins, on s'occupe du reste, avec les meilleurs talents</Titre>
            <img src={HomeIllu} alt="home illustration" />
            <StyledLink to='/survey/'>Faire le test</StyledLink>
        </Container>
    )
}

export default Home;