import './App.css';
import { I18nProvider } from './Components/i18nContext';
import Calendar from './Pages/Calendari';
import Contacte from './Pages/Contact';
import Header from './Pages/Header';
import { Ideari } from './Pages/Ideari';
import './Pages/MainPage';
import MainPage from './Pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import QuiSom from './Pages/QuiSom';
import Inscripcions from './Pages/Inscripcions';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden max-w-full w-screen font-sans">
        <I18nProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/qui-som" element={<QuiSom />} />
            <Route path="/ideari" element={<Ideari />} />
            <Route path="/calendari" element={<Calendar />} />
            <Route path="/inscripcions" element={<Inscripcions />} />
            <Route path="/contacte" element={<Contacte />} />
          </Routes>
        </I18nProvider>
        <Analytics />
      </div>
    </>
  );
}

export default App;
