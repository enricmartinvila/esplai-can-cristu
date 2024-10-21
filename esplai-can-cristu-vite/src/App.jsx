import './App.css';
import { I18nProvider } from './Components/i18nContext';
import Contacte from './Pages/Contact';
import Header from './Pages/Header';
import { Ideari } from './Pages/Ideari';
import './Pages/MainPage';
import MainPage from './Pages/MainPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <I18nProvider>
          <Header />
          <div className='mt-24 px-8 py-24'>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/qui-som" element={""} />
              <Route path="/ideari" element={<Ideari />} />
              <Route path="/calendari" element={""} />
              <Route path="/inscripcions" element={""} />
              <Route path="/contacte" element={<Contacte />} />
            </Routes>
          </div>
      </I18nProvider>
    </>
  );
}

export default App;
