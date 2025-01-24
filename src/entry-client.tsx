import './index.css'
import {StrictMode} from 'react'
import {hydrateRoot} from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux';
import {store} from '@/store/store';


hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
