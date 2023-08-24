import Image, { StaticImageData } from "next/image"
import { SetStateAction } from "react"

type ShoecardProps = {
  imgURL: any
  changeBigShoeImage: (shoe: SetStateAction<StaticImageData>) => void
  bigShoeImg: StaticImageData
}

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: ShoecardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <Image
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard
