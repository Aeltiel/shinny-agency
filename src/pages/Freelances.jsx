import freelanceProfiles from '../components/FreelanceData'
import Card from '../components/indexCard'
import styled from 'styled-components'
import colors from '../utils/colors'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

`
const Page = styled.div`
    width : 70%;
    margin-left : 10%
`

const Title = styled.h1`
        text-align: center;
`

const SubTitle = styled.p`
    text-align: center;
    font-size: 20px;
    color: ${colors.secondary};
    padding-bottom: 30px;
`

function Freelances() {
    return (
        <Page>
            <Title>Trouvez votre prestataire</Title>
            <SubTitle>Chez Shinny nous réunissons les meilleurs profils pour vous</SubTitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </Page>
    )
}

export default Freelances