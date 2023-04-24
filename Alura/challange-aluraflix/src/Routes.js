import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { videosService } from 'Service/videos-service';
import Home from './Paginas/Home';
import NovoVideo from './Paginas/NovoVideo';
import NovaCategoria from './Paginas/NovaCategoria';
import Footer from './component/Footer';
import Header from 'component/Header';

export default function AppRoutes() {
  const [Categoria, setCategoria] = useState([]);

  useEffect(() => {
    videosService.listaCategorias()
      .then(data => setCategoria(data))
      .catch(err => console.log(err));
  }, [])

  const cadastraCategoria = (novaCategoria) => {
    setCategoria([...Categoria, novaCategoria])
  }

  const deletaCategoria = (id) => {
    setCategoria(Categoria.filter(categoria => categoria.id !== id));
    videosService.removeCategoria(id)
  }

  return (
    <BrowserRouter>
      <Header />

      <section>
        <Routes>

          <Route
            index
            element={<Home categoria={Categoria} />}
          />
          <Route
            path='novovideo'
            element={<NovoVideo categoria={Categoria} />}
          />
          <Route
            path='novacategoria'
            element={
              <NovaCategoria
                categoria={Categoria}
                novaCategoria={cadastraCategoria}
                deletar={deletaCategoria}
              />
            }
          />

          <Route path='*' element={<div>Pagina não encontrada</div>} />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
}

