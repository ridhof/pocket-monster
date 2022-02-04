import styled from '@emotion/styled'
import { useState, useEffect } from "react"

const YELLOW = '#E3B505'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;
`

const Text = styled.p`
  margin: 0;
  padding: 0.125rem 0;
  font-weight: 300;
  text-transform: capitalize;
`

const NavContainer = styled.div`
  width: 100%;
  padding: 1vh 1vw;
  background-color: ${YELLOW};
`

const ProfileContainer = styled.div`
  padding: 0;
  margin: 0;
  background-color: green;
`

const BackContainer = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  column-gap: 0.5rem;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`

const SVGContainer = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`

function PokemonProfile({ setSelectedPokemon }) {
  const navigateBack = () => {
    setSelectedPokemon(null)
  }
  return (
    <ProfileContainer>
      <NavContainer>
        <BackContainer onClick={navigateBack}>
          <SVGContainer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" />
            </svg>
          </SVGContainer>
          <Text>Kembali</Text>
        </BackContainer>
      </NavContainer>
      <ListContainer />
    </ProfileContainer>
  )
}

export { PokemonProfile }