import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { WildList } from '../components/wild'
import { MyPocketList } from '../components/my'
import { PokemonProfile } from '../components/profile'
import { NavMenu } from '../components/menu'
import styled from '@emotion/styled'
import { useState, useEffect } from "react"

export default function Home() {
  const DesktopContainer = styled.div`
    background-color: rgb(243 244 246);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const MobileContainer = styled.div`
    position: relative;
    background-color: white;
    min-height: 100vh;
    width: 100%;
    max-width: 28rem;
  `

  const MenuContainer = styled.div`
    padding: 2vh 2vw;
  `

  const [selectedMenu, setSelectedMenu] = useState('wild')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  useEffect(() => {
    setSelectedMenu('wild')
  }, [])
  return (
    <DesktopContainer>
      <MobileContainer>
        {
          selectedPokemon ? 
            <PokemonProfile setSelectedPokemon={setSelectedPokemon} /> :
            <MenuContainer>
              {
                selectedMenu == 'wild' ?
                  <WildList setSelectedPokemon={setSelectedPokemon} /> : <MyPocketList setSelectedPokemon={setSelectedPokemon} />
              }
              <NavMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            </MenuContainer>
        }
      </MobileContainer>
    </DesktopContainer>
  )
}
