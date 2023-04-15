import './Button.css'
import '../VariaveisCss/Variaveis.css'

const Button = ({ texto, tipo }) => {
  return (
    <button className={tipo}>{texto}</button>
  )
}

export default Button;