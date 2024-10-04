import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Cntextapi } from './components/Cntextapi.jsx'
import store from './store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Cntextapi>
      <Provider store={store}>
        <App />
      </Provider>
    </Cntextapi>

)
