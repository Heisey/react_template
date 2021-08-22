import React from 'react'
import styles from './styles'

interface NavProps {
  children?: React.ReactNode
}

const Nav: React.FC<NavProps> = (props) => {

  const {
    children
  } = props

  return (
    <styles.Nav>
      {children ? children : 'Enter Nav content'}
    </styles.Nav>
  )
}

export default Nav