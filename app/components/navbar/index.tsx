import { NavbarProps } from "../types"

const Navbar = ({ className, children }: NavbarProps) => {
  return (
    <div className={className!}>
      {children}
    </div>
  )
}

export default Navbar