import './component/VariaveisCss/Variaveis.css'
import Header from './component/Header';
import Banner from './component/Banner';
import Footer from './component/Footer';

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
const thumbnail = `img/thumbnail.avif`

function App() {
  return (
    <div className="App">
      <Header />
      <Banner 
        categoria='Fron-end' 
        titulo='titulo' 
        descricao={lorem}
        img={thumbnail} 
      />
      <Footer />
    </div>
  );
}

export default App;
