import { Link } from 'react-router-dom';
import styled from 'styled-components'
import colors from '../../utils/colors';
import Logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding : 15px;
    color : #8186a0;
    text-decoration : none;
    font-size : 18px;
    height : 15px;
    align-self : center;
    ${(props) =>
        props.$isFullLink &&
        `color : white;
        border-radius : 30px;
        background-color : ${colors.primary};`
    }
`

const Nav = styled.nav`
    display : flex;
    justify-content : right;
    `

const HeaderStyles = styled.header`
    display: flex;
    justify-content : space-between;
`
function Header() {
    return (
        <HeaderStyles>
            <img src={Logo} alt='Logo shinny' />
            <Nav>
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/freelances'>Freelances</StyledLink>
                <StyledLink to='/survey/' $isFullLink>Faire le test</StyledLink>
            </Nav>
        </HeaderStyles>
    )
}

export default Header;