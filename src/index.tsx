import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import { Provider } from 'react-redux';
import { store } from 'store/store';
// router
import { BrowserRouter } from 'react-router-dom'
// components
import App from 'App';
// styles
import 'styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)

