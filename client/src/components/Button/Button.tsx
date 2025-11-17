import css from './Button.module.css'

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit";
}
const Button = ({onClick, children, type = "button"}: ButtonProps) => {
  return (
    <button className={css.btn} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
