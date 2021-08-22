import React from 'react'
import styles from './styles'

interface LinkProps {
  children?: React.ReactNode
  to?: string
}

const Link: React.FC<LinkProps> = (props) => {

  const {
    children,
    to = '/'
  } = props

  return (
    <styles.Link
      to={to}
    >
      {children ? children : 'Enter link content'}
    </styles.Link>
  )
}

export default Link