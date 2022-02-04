import styled from '@emotion/styled'
import { useState, useEffect } from "react"

const YELLOW = '#E3B505'

const Button = styled.button`
  width: 100%;
  margin: 0.5rem 0 3rem 0;
  padding: 0.75rem;
  background-color: ${YELLOW};
  font-size: 12px;
  color: black;
  border-radius: 0.25rem;
  border: none;
  &:hover {
    opacity: 0.9;
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;
`

const MonsterCard = styled.button`
  background-color: transparent;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  border-style: solid;
  border-width: 0.0625rem;
  border-color: rgb(156 163 175);
  border-radius: 0.25rem;
  &:hover {
    background-color: rgb(209 213 219);
  }
`

const AvatarContainer = styled.div`
  // background-color: yellow;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  color: inherit;
  border-radius: 9999px;
`

const LoadingContainer = styled.svg`
  height: 1rem;
  width: 1rem;
  color: inherit;
  border-radius: 9999px;

  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const TextContainer = styled.div`
  padding: 0.5vh 0;
  width: 100%;
  text-align: left;
`

const Text = styled.p`
  margin: 0;
  padding: 0.125rem 0;
  font-weight: 300;
  text-transform: capitalize;
`

function WildList({ setSelectedPokemon }) {
  const [pokemons, setPokemons] = useState([])
  const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
  const [disabledButton, setDisableButton] = useState(false)
  const fetchPokemons = async () => {
    setDisableButton(true)
    try {
      const fetchResult = await fetch(fetchUrl)
      const jsonResult = await fetchResult.json()
      if (jsonResult.next) setFetchUrl(jsonResult.next)
      if (pokemons.length == 0) setPokemons(jsonResult.results)
      else {
        setPokemons(pokemons.concat(jsonResult.results))
      }
      setDisableButton(false)
    } catch (err) {
      setDisableButton(false)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchPokemons()
  }, [])
  useEffect(() => {
    if (!pokemons) {
      setPokemons([])
      setFetchUrl('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
      fetchPokemons()
    }
  }, [pokemons])
  return (
    <ListContainer>
      {
        pokemons.length > 0 ?
          pokemons.map(pokemon => {
            const pokemonURLSplit = pokemon.url.split('/')
            const pokemonID = pokemonURLSplit[pokemonURLSplit.length - 2]
            return <MonsterCard key={pokemon.url} onClick={() => { setSelectedPokemon(pokemonID) }} >
              <AvatarContainer>
                <Avatar 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`} 
                />
              </AvatarContainer>
              <TextContainer>
                <Text>Name: {pokemon.name}</Text>
                <Text>Owned: 0</Text>
              </TextContainer>
          </MonsterCard>
          }) 
          : <LoadingContainer>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </LoadingContainer>
      }
      {
        pokemons.length > 0 ?
          <Button onClick={fetchPokemons} disabled={disabledButton}>
            {
              disabledButton ?
                <LoadingContainer>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </LoadingContainer> : 'Load More'
            }
          </Button> : ''
      }
    </ListContainer>
  )
}

export { WildList }