import Image, { StaticImageData } from "next/image"

type ButtonProps = {
  label: string
  iconURL: StaticImageData | string
  backgroundColor: string
  borderColor: string
  textColor: string
  fullWidth: boolean
}

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "border-coral-red bg-coral-red text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
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
