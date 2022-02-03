import styled from '@emotion/styled'

const GRAY_ACTIVE = '#362C28'
const GRAY = '#81695F'
const YELLOW = '#E3B505'

const DesktopContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  border-style: none;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-color: transparent;
  border-top-color: rgb(156 163 175);
  padding: 0.5vh 0px;
  width: 100%;
  background-color: ${YELLOW};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const NavIconContainer = styled.button`
  background-color: ${YELLOW};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${GRAY};
  &:hover {
    color: ${GRAY_ACTIVE};
  }
  &:active {
    color: ${GRAY_ACTIVE};
  }
`

const NavIconContainerActive = styled.button`
  background-color: ${YELLOW};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${GRAY_ACTIVE};
  &:hover {
    color: ${GRAY_ACTIVE};
  }
  &:active {
    color: ${GRAY_ACTIVE};
  }
`

const NavIcon = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  color: inherit;
  margin-bottom: 0.5vh;
`

const NavText = styled.span`
  color: ${GRAY_ACTIVE};
`

const NavMenu = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <DesktopContainer>
      <NavContainer>
        {
          selectedMenu == 'wild' ? 
            <NavIconContainerActive>
                <NavIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" />
                  </svg>
                </NavIcon>
                <NavText>Explore</NavText>
            </NavIconContainerActive>
          :
            <NavIconContainer onClick={() => {setSelectedMenu('wild')}}>
              <NavIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" />
                </svg>
              </NavIcon>
              <NavText>Explore</NavText>
            </NavIconContainer>
        }
        {
          selectedMenu == 'my' ? 
            <NavIconContainerActive>
                <NavIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  </svg>
                </NavIcon>
                <NavText>My Pocket</NavText>
            </NavIconContainerActive>
          :
            <NavIconContainer onClick={() => {setSelectedMenu('my')}}>
              <NavIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                </svg>
              </NavIcon>
              <NavText>My Pocket</NavText>
            </NavIconContainer>
        }
      </NavContainer>
    </DesktopContainer>
  )
}

export { NavMenu }