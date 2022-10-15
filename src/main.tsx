import React from 'react'
import ReactDOM from 'react-dom/client'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { Provider } from 'react-redux'

import App from './App'
import { store } from './app/store'

import Loading from './components/loading/Loading'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
