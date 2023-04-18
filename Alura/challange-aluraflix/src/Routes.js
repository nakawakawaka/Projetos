import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home';
import NovoVideo from './Paginas/NovoVideo';
import NovaCategoria from './Paginas/NovaCategoria';
import Footer from './component/Footer';
import Header from 'component/Header';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='novovideo' element={<NovoVideo />} />
        <Route path='novacategoria' element={<NovaCategoria />} />

        <Route path='*' element={<div>Pagina não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

