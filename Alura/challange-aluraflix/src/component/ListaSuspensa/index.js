import './ListaSuspensa.css'

export default function ListaSuspensa({ valor, required, itens }) {
  return (
    <div className='listaSuspensa'>
      <select value={valor} required={required}>
        <option>Escolha uma Categoria...</option>
        {/* {itens.map(item => <option key={item}>{item}</option>)} */}
      </select>
    </div>
  )
}