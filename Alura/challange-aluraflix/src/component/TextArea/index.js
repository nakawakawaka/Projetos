import './TextArea.css';

export default function TextArea({placeholder}) {
  return(
    <div>
      <textarea placeholder={placeholder}></textarea>
    </div>
  )
}