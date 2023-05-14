import './Button.css'

export const Button = ({value,onClick,disabled}) => {
  return(
    <button value = {value} onClick={onClick} disabled={disabled}>{value}</button>
    )
}
 