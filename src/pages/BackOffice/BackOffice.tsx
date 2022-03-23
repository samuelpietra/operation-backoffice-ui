import styled from 'styled-components'

import { AwesomeText } from '@/components/AwesomeText'

const Container = styled.div`
  background-color: #282a36;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function BackOfficePage() {
  return (
    <Container>
      <AwesomeText color="#ff79c6" />
    </Container>
  )
}

export default BackOfficePage
