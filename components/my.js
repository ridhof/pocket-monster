import styled from '@emotion/styled'
import { WildList } from '../components/wild'

const GRAY = '#cdc3bf'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`

const CardProfile = styled.div`
  background-color: blue;
  border-radius: 0.375rem;
  padding: 1.25rem;
  background-color: ${GRAY};
  display: flex;
  column-gap: 1rem;
`

const AvatarContainer = styled.div`
  background-color: #f2f0ef;
  width: 4rem;
  height: 4rem;
  border-radius: 9999px
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  margin-top: 0.375rem;
  padding: 0.125rem 0;
`

const HelloText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(82 82 91);
  padding: 0;
  margin: 0;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.25rem;
`

const EditButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.6;
  &:hover {
    opacity: 0.4;
  }
`

function MyPocketList({ setSelectedPokemon }) {
  return (
    <ListContainer>
      <CardProfile>
        <AvatarContainer>
          <img src="https://avatars.dicebear.com/api/adventurer/edoyour-custom-seed.svg" />
        </AvatarContainer>
        <TextContainer>
          <HelloText>Hello</HelloText>
          <NameContainer>
            <span>Trainer</span>
            <EditButtonContainer>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </EditButtonContainer>
          </NameContainer>
        </TextContainer>
      </CardProfile>

      <p>My Pocket:</p>
      <WildList setSelectedPokemon={setSelectedPokemon} />
    </ListContainer>
  )
}

export { MyPocketList }