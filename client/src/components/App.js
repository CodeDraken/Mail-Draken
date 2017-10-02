import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from '../routes'

const Header = () => <h2>Header</h2>

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    </div>
  )
}

export default App
