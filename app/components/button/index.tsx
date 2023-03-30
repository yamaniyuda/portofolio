import { ButtonProps } from "../types"

const Button = ({ className, to, children }: ButtonProps) => {
  return (
    <a href={to} className={className}>
      <button className="bg-none border-none">{children}</button>
    </a>
  )
}

export default Button;