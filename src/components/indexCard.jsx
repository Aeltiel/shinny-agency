import PropTypes from 'prop-types'
import DefaultPicture from '../components/FreelanceData'
import styled from 'styled-components'
import colors from '../utils/colors'

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    align-self : center;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 250px;
    height : 250px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const Name = styled.span`
align-self : center;
`
function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <span><CardLabel>{label}</CardLabel></span>
            <CardImage src={picture} alt="freelance"/>
            <Name>{title}</Name>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, //Pour exiger qu'une prop soit requise
    picture: PropTypes.string.isRequired
}

//possibilité de mettre une prop par défaut (titre)
// pour bien définir la prop par defaut et ainsi éviter des erreurs
Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture
}
export default Card