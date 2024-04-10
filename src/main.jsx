import ReactDom from "react-dom/client";
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import { store } from "./store/Store";
import {Toaster} from './components/ui/sonner'

ReactDom.createRoot(document.querySelector('#root')).render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>
    </Provider>
    
)