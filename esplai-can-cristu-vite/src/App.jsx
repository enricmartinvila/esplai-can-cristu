import './App.css';
import { I18nProvider } from './Components/i18nContext';
import Contacte from './Pages/Contact';
import Header from './Pages/Header';
import './Pages/MainPage';
import MainPage from './Pages/MainPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <I18nProvider>
        <div className=''>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/qui-som" element={""} />
            <Route path="/ideari" element={""} />
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
