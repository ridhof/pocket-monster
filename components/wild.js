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
  padding: 2vh 2vw;
  row-gap: 0.75rem;
`

const MonsterCard = styled.div`
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

const TextContainer = styled.div`
  padding: 0.5vh 0;
  width: 100%;
`

const Text = styled.p`
  margin: 0;
  padding: 0.125rem 0;
  font-weight: 300;
  text-transform: capitalize;
`

function WildList() {
  const [pokemons, setPokemons] = useState([])
  const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
  const fetchPokemons = async () => {
    try {
      const fetchResult = await fetch(fetchUrl)
      const jsonResult = await fetchResult.json()
      if (jsonResult.next) setFetchUrl(jsonResult.next)
      if (pokemons.length == 0) setPokemons(jsonResult.results)
      else {
        // let pokemonTemp = pokemons
        // pokemonTemp = pokemonTemp.concat(jsonResult.results)
        // console.log(pokemonTemp)
        setPokemons(pokemons.concat(jsonResult.results))
      }
    } catch (err) {
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
    console.log(pokemons, fetchUrl)
  }, [pokemons])
  return (
    <ListContainer>
      {
        pokemons.length > 0 ?
          pokemons.map(pokemon => {
            return <MonsterCard key={pokemon.url}>
              <AvatarContainer>
                <Avatar src={`https://avatars.dicebear.com/api/adventurer-neutral/${pokemon.name}.svg`} />
              </AvatarContainer>
              <TextContainer>
                <Text>Name: {pokemon.name}</Text>
                <Text>Owned: 0</Text>
              </TextContainer>
          </MonsterCard>
          }) 
          : ''
      }
      {
        pokemons.length > 0 ?
          <Button onClick={fetchPokemons}>Load More</Button> : ''
      }
      {/* <nav>
        <input placeholder="Search..." />
        <div href="/">
          <a>Home</a>
        </div>
        <div href="/about">
          <a>About</a>
        </div>
        <div href="/contact">
          <a>Contact</a>
        </div>
        <Button>Hi !</Button>
      </nav> */}
    </ListContainer>
  )
}

export { WildList }