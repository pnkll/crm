import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'


const container = document.getElementById('root')
const root = createRoot(container)

root.render(<Provider store={store}>
    <CookiesProvider>
        <App />
    </CookiesProvider>
</Provider>)

reportWebVitals();
