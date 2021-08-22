import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in;

  &:hover {
    color: yellow;
  }
`