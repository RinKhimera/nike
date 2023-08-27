import Image, { StaticImageData } from "next/image"

type ButtonProps = {
  label: string
  iconURL: StaticImageData | string
  backgroundColor: string
  borderColor: string
  textColor: string
}

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt={label}
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  )
}

export default Button
