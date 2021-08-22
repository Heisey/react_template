import React from 'react';
import { Route, Switch } from 'react-router-dom'
import components from '../components'
import hooks from '../hooks'
import useActions from '../hooks/useActions';
import pages from '../pages'
import styles from './styles'

function App() {

  const { defaultAction } = useActions()

  hooks.useEffect(() => {
    defaultAction('APP_LOADED', true)
  }, [])
  
  return (
    <styles.App>
      <components.Nav>
        <styles.linkContainer>
          <components.Link to='/'>Home</components.Link>
          <components.Link to='about'>About</components.Link>
          <components.Link to='contact'>Contact</components.Link>
        </styles.linkContainer>
      </components.Nav>
      <Switch>
        <Route path='/about' component={pages.About} />
        <Route path='/contact' component={pages.Contact} />
        <Route path='/' component={pages.Landing} />
      </Switch>
      
    </styles.App>
  );
}

export default App;
