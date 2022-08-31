import * as React from 'react';
import Router from './routes/router'
import GlobalState from './context/global/GlobalState';


function App() {
  return (
    <GlobalState>
    <Router />
    </GlobalState>
  )
}

export default App 