import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type ButtonProps = {
  label: string
  iconURL: StaticImport
}

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
      {label}
      <Image src={iconURL} alt={label} className="ml-2 h-5 w-5 rounded-full" />
    </button>
  )
}

export default Button
