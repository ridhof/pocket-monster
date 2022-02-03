import styled from '@emotion/styled'
import { useState, useEffect } from "react"

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh 2vw;
  row-gap: 0.75rem;
`

function MyPocketList() {
  return (
    <ListContainer>
      <p>Halo</p>
    </ListContainer>
  )
}

export { MyPocketList }