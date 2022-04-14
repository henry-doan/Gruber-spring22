import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initMiddleware } from 'devise-axios';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceProvider from "./providers/ServiceProvider";
import NoteProvider from './providers/NoteProvider';


initMiddleware()
ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ServiceProvider>
        <NoteProvider>
          <App />
        </NoteProvider>
      </ServiceProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();